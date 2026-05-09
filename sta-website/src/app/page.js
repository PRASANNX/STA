import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Coaches from "../components/Coaches";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import Camps from "../components/Camps";
import Testimonials from "../components/Testimonials";
import JoinCTA from "../components/JoinCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Coaches />
        <Achievements />
        <Gallery />
        <Camps />
        <Testimonials />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
