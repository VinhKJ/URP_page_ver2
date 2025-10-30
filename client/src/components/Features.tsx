import { Users, MessageSquare, Lightbulb, Sparkles, Share2, Laptop, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadarChart } from "@/components/RadarChart";

const skills = [
  { icon: Users, name: "Teamwork", description: "Làm việc nhóm hiệu quả" },
  { icon: MessageSquare, name: "Communication", description: "Giao tiếp rõ ràng" },
  { icon: Lightbulb, name: "Critical Thinking", description: "Tư duy phản biện" },
  { icon: Sparkles, name: "Creativity", description: "Sáng tạo và đổi mới" },
  { icon: Share2, name: "Collaboration", description: "Hợp tác đa dạng" },
  { icon: Laptop, name: "ICT Literacy", description: "Công nghệ thông tin" },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <Badge variant="secondary" className="mb-4">
              Radar 6 Kỹ năng
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Đánh giá toàn diện năng lực của bạn
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dựa trên khung năng lực ATC21S, chúng tôi đánh giá 6 kỹ năng thiết yếu cho thế kỷ
              21, giúp bạn hiểu rõ điểm mạnh và cơ hội phát triển.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                    data-testid={`skill-${index}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-background border flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center" data-testid="radar-showcase">
            <Card className="p-8 max-w-md w-full">
              <RadarChart />
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex justify-center" data-testid="green-token-visual">
            <Card className="p-8 max-w-md w-full text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-accent" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">250</div>
                <p className="text-sm text-muted-foreground">Green Tokens đã kiếm được</p>
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Leaf className="w-4 h-4 text-accent" />
                  <span>≈ 5 cây được trồng</span>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent-foreground">
              Green Token
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Học để trồng cây - Learn to Earn Green
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mỗi hoạt động học tập, rèn luyện kỹ năng của bạn sẽ được quy đổi thành Green Token.
              Tích lũy đủ token, bạn có thể đóng góp vào việc trồng cây thật, tạo tác động tích
              cực cho môi trường.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <span className="text-foreground">Hoàn thành test SJT: +50 tokens</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <span className="text-foreground">Tham gia Mini-Project: +100 tokens</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">✓</span>
                </div>
                <span className="text-foreground">Chia sẻ với bạn bè: +20 tokens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
