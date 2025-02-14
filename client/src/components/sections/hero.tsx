import { Button } from "@/components/ui/button";
import { MotionFade } from "@/components/ui/motion-fade";
import { SiDiscord } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <MotionFade>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
            Welcome to GamerHub
          </h1>
        </MotionFade>
        
        <MotionFade delay={0.2}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Join our thriving gaming community where passion meets play. Connect, compete, and create lasting friendships.
          </p>
        </MotionFade>

        <MotionFade delay={0.4}>
          <Button size="lg" className="gap-2">
            <SiDiscord className="w-5 h-5" />
            Join Our Server
          </Button>
        </MotionFade>
      </div>
    </section>
  );
}
