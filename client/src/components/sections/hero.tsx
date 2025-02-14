import { Button } from "@/components/ui/button";
import { MotionFade } from "@/components/ui/motion-fade";
import { SiDiscord } from "react-icons/si";
import { Link } from "wouter";

const DISCORD_CHANNEL_URL = "https://canary.discord.com/channels/961457576342593606/961457576795602960";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc')] 
        bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
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
          <div className="flex gap-4 justify-center">
            <a href={DISCORD_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <SiDiscord className="w-5 h-5" />
                Join Our Server
              </Button>
            </a>
            <Link href="/posts">
              <Button size="lg" variant="secondary">
                View Posts
              </Button>
            </Link>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}