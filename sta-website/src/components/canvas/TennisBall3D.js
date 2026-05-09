"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useAppStore from "@/store/useAppStore";

// Custom vertex shader: deforms the sphere to create pickleball-like indentations
const vertexShader = `
  uniform float uMorphProgress;
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;

  // Attempt to create evenly-distributed holes across the sphere
  float pickleballHole(vec3 pos) {
    float holes = 0.0;
    // Use spherical coordinates to distribute holes
    float phi = atan(pos.y, pos.x);
    float theta = acos(pos.z / length(pos));
    
    // Create a grid of holes using sin/cos on spherical coords
    float gridPhi = sin(phi * 6.0) * cos(theta * 5.0);
    float gridTheta = sin(theta * 7.0) * cos(phi * 4.0);
    
    // Combine for a somewhat regular pattern
    holes = smoothstep(0.3, 0.6, gridPhi * gridTheta + 0.5);
    
    return holes;
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    
    // Calculate displacement for pickleball holes
    float holePattern = pickleballHole(normalize(position));
    float displacement = -holePattern * 0.08 * uMorphProgress;
    vDisplacement = holePattern * uMorphProgress;
    
    vec3 newPosition = position + normal * displacement;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

// Custom fragment shader: transitions color based on active sport
const fragmentShader = `
  uniform float uMorphProgress;
  uniform float uTime;
  uniform vec3 uTennisColor;
  uniform vec3 uPickleballColor;
  uniform vec3 uTTColor;
  uniform float uTTProgress;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;

  void main() {
    // Lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diffuse = max(dot(vNormal, lightDir), 0.0);
    float ambient = 0.35;
    float lighting = ambient + diffuse * 0.65;
    
    // Rim lighting for that premium glow
    vec3 viewDir = normalize(-vPosition);
    float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
    rim = pow(rim, 3.0) * 0.4;
    
    // Base color: lerp between tennis, pickleball, and TT
    vec3 baseColor = mix(uTennisColor, uPickleballColor, uMorphProgress);
    baseColor = mix(baseColor, uTTColor, uTTProgress);
    
    // Darken the holes on pickleball
    float holeDarken = 1.0 - vDisplacement * 0.6;
    
    // Subtle emissive glow
    vec3 emissive = baseColor * 0.08;
    
    vec3 finalColor = baseColor * lighting * holeDarken + emissive + vec3(rim) * baseColor;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function TennisBall3D() {
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  
  // Track morph targets for smooth interpolation
  const morphTargets = useRef({
    currentMorph: 0,
    targetMorph: 0,
    currentTT: 0,
    targetTT: 0,
  });

  const activeSport = useAppStore((state) => state.activeSport);

  // Update morph targets when activeSport changes
  useMemo(() => {
    if (!morphTargets.current) return;
    switch (activeSport) {
      case "pickleball":
        morphTargets.current.targetMorph = 1;
        morphTargets.current.targetTT = 0;
        break;
      case "tt":
        morphTargets.current.targetMorph = 0;
        morphTargets.current.targetTT = 1;
        break;
      default: // tennis
        morphTargets.current.targetMorph = 0;
        morphTargets.current.targetTT = 0;
        break;
    }
  }, [activeSport]);

  // Create shader uniforms
  const uniforms = useMemo(
    () => ({
      uMorphProgress: { value: 0 },
      uTime: { value: 0 },
      uTennisColor: { value: new THREE.Color("#c8e835") },
      uPickleballColor: { value: new THREE.Color("#e8f55a") },
      uTTColor: { value: new THREE.Color("#ff6b35") },
      uTTProgress: { value: 0 },
    }),
    []
  );

  // Animation loop: scroll physics + morph interpolation
  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current) return;

    const mt = morphTargets.current;

    // Smooth lerp toward morph targets
    mt.currentMorph += (mt.targetMorph - mt.currentMorph) * 0.04;
    mt.currentTT += (mt.targetTT - mt.currentTT) * 0.04;

    // Update shader uniforms
    materialRef.current.uniforms.uMorphProgress.value = mt.currentMorph;
    materialRef.current.uniforms.uTTProgress.value = mt.currentTT;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

    // Scroll-synced rotation
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

    meshRef.current.rotation.x = progress * Math.PI * 4;
    meshRef.current.rotation.y =
      progress * Math.PI * 2 + state.clock.elapsedTime * 0.3;
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 10, 10]} intensity={2.0} />
      <directionalLight
        position={[-5, -5, -5]}
        intensity={0.4}
        color="#c8e835"
      />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#c8e835" />

      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 128, 128]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
}
