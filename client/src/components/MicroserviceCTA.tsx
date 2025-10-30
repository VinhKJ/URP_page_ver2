import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, User, ArrowRight } from "lucide-react";

export function MicroserviceCTA() {
  return (
    <section id="test-radar" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-8">
        <Card
          className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 border-primary/20 hover:shadow-lg transition-all duration-300"
          data-testid="cta-sjt"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <LineChart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
                Bạn đã sẵn sàng cho Radar Kỹ năng?
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Chỉ mất 15 phút để hoàn thành bài test SJT và khám phá điểm mạnh của bạn qua Radar
                6 Kỹ năng. Kết quả được xác minh bởi AI và công nhận bởi doanh nghiệp.
              </p>
              <Button size="lg" className="group" data-testid="button-cta-sjt">
                <a
                  href="https://test.urp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Test SJT ngay
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                <LineChart className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </Card>

        <Card
          className="p-8 md:p-12 bg-gradient-to-br from-accent/5 via-accent/10 to-primary/5 border-accent/20 hover:shadow-lg transition-all duration-300"
          data-testid="cta-mbti"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="hidden md:flex justify-center order-2 md:order-1">
              <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl flex items-center justify-center">
                <User className="w-32 h-32 text-accent/30" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <User className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
                Thấu hiểu bản thân sâu sắc hơn?
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Khám phá tính cách và phong cách làm việc của bạn qua bài test MBTI và DISC. Hiểu
                rõ hơn về điểm mạnh, xu hướng nghề nghiệp phù hợp với con người thật của bạn.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="group border-accent/50 hover:bg-accent/10"
                data-testid="button-cta-mbti"
              >
                <a
                  href="https://profile.urp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Khám phá MBTI/DISC
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
