import { SectionHeading } from "@/components/ui/section-heading";
import { MotionFade } from "@/components/ui/motion-fade";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data - This would be replaced with real data from your API
const posts = [
  {
    id: 1,
    author: "GamerPro123",
    content: "Just achieved a new high score in Rocket League! 🚀",
    timestamp: "2024-02-14T10:00:00Z",
  },
  {
    id: 2,
    author: "EpicGamer",
    content: "Anyone up for some Valorant matches tonight? Looking for a squad!",
    timestamp: "2024-02-14T09:30:00Z",
  },
  {
    id: 3,
    author: "StreamQueen",
    content: "Going live in 10 minutes with some Minecraft building! Come hang out!",
    timestamp: "2024-02-14T09:00:00Z",
  },
];

export default function Posts() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Channel Posts" 
          subtitle="Latest updates from our gaming community"
        />
        
        <ScrollArea className="h-[600px] rounded-md border">
          <div className="space-y-4 p-4">
            {posts.map((post, index) => (
              <MotionFade key={post.id} delay={index * 0.1}>
                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">{post.author}</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">{post.content}</p>
                  </CardContent>
                </Card>
              </MotionFade>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
