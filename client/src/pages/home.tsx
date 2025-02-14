import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Rules from "@/components/sections/rules";
import Community from "@/components/sections/community";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Rules />
      <Community />
    </div>
  );
}
