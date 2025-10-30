import { Award, Users, Building2, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    icon: Shield,
    title: "Dựa trên khung ATC21S",
    description: "Chuẩn đánh giá kỹ năng thế kỷ 21",
  },
  {
    icon: Users,
    title: "170+ Sinh viên",
    description: "Đã tham gia khảo sát",
  },
  {
    icon: Building2,
    title: "Đối tác đào tạo",
    description: "Hợp tác với các trường đại học",
  },
  {
    icon: Award,
    title: "Chứng chỉ xác minh",
    description: "Được công nhận bởi doanh nghiệp",
  },
];

export function TrustMetrics() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`metric-card-${index}`}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{metric.title}</h3>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
