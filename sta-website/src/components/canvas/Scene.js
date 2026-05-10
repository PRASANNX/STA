"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import TennisBall3D from "@/components/canvas/TennisBall3D";

export default function Scene() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 40, // Ensure it's above background but below fixed nav
      }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
    >
      <TennisBall3D />
      <View.Port />
    </Canvas>
  );
}
