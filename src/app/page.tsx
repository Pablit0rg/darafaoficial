import Hero from '@/components/sections/Hero';
import Manifesto from '@/components/sections/Manifesto';
import Showcase from '@/components/sections/Showcase';
import InstagramCTA from '@/components/sections/InstagramCTA';

export const revalidate = 86400;
export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Hero />
      <Manifesto />
      <Showcase />
      <InstagramCTA />
    </main>
  );
}