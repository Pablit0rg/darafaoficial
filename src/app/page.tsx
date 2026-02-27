// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Showcase from "@/components/sections/Showcase";
import InstagramCTA from "@/components/sections/InstagramCTA";

export default function Home() {
  return (
    <main>
      {/* O Navigation e o Footer agora vivem exclusivamente no layout.tsx */}
      <Hero />
      <Manifesto />
      <Showcase />
      <InstagramCTA />
    </main>
  );
}