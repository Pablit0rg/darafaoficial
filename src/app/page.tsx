// src/app/page.tsx
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Showcase from "@/components/sections/Showcase";
import InstagramCTA from "@/components/sections/InstagramCTA";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Manifesto />
      <Showcase />
      <InstagramCTA />
      <Footer />
    </main>
  );
}