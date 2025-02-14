import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionFade } from "@/components/ui/motion-fade";

const rules = [
  "Be respectful to all members",
  "No hate speech, racism, or discrimination",
  "Keep content in appropriate channels",
  "No spamming or excessive self-promotion",
  "Follow Discord's Terms of Service",
];

export default function Rules() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="Server Rules" 
          subtitle="Help us maintain a friendly and welcoming community"
        />

        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <MotionFade key={index} delay={index * 0.1}>
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <p className="text-lg">{rule}</p>
                  </div>
                </MotionFade>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
