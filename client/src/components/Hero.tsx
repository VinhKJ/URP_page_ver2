import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { RadarChart } from "@/components/RadarChart";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1.5 text-sm font-medium"
              data-testid="badge-urp"
            >
              University Readiness Passport
            </Badge>

            <div className="space-y-6">
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Your Skills.
                </span>
                <br />
                <span>Verified.</span>
                <br />
                <span className="text-muted-foreground">Your Future. Empowered.</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                CV của bạn thiếu minh chứng? Bắt đầu xác thực năng lực thực tế của bạn ngay hôm
                nay với bài test SJT khoa học.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild data-testid="button-hero-test-now">
                <Link href="/auth">
                  Test Năng lực ngay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                asChild
                data-testid="button-hero-learn-more"
              >
                <a href="#how-it-works">Tìm hiểu thêm</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Dựa trên khung ATC21S</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Miễn phí 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Kết quả ngay lập tức</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end" data-testid="hero-visual">
            <div className="relative w-full max-w-md">
              <div className="bg-card border border-card-border rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="font-semibold text-lg mb-2">Radar 6 Kỹ năng</h3>
                  <p className="text-sm text-muted-foreground">Hộ chiếu Kỹ năng Số của bạn</p>
                </div>
                <RadarChart />
                <div className="mt-6 flex justify-center">
                  <div className="bg-background border rounded-lg p-4 inline-flex flex-col items-center gap-2">
                    <div className="w-24 h-24 bg-muted flex items-center justify-center rounded">
                      <span className="text-xs text-muted-foreground">QR Code</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Được xác minh</span>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
