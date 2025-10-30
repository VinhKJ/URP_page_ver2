import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, ArrowRight, Clock, DollarSign, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "3-6 tháng đào tạo lại",
    description: "Nhân viên mới cần thời gian dài để đáp ứng yêu cầu công việc",
  },
  {
    icon: DollarSign,
    title: "Chi phí tuyển dụng cao",
    description: "CV không phản ánh đúng năng lực thực tế của ứng viên",
  },
  {
    icon: Users,
    title: "Khó đánh giá soft skills",
    description: "Thiếu công cụ đo lường khách quan các kỹ năng mềm",
  },
];

const solutions = [
  "Tiếp cận hồ sơ sinh viên đã được xác thực qua Radar 6 Kỹ năng",
  "Lọc ứng viên theo kỹ năng cụ thể phù hợp với vị trí tuyển dụng",
  "Giảm 60% thời gian đào tạo lại nhân viên mới",
  "Dữ liệu đánh giá khoa học dựa trên khung ATC21S",
];

export function EmployerSection() {
  return (
    <section id="doanh-nghiep" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Dành cho Doanh nghiệp
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Giải pháp tuyển dụng thông minh, tiết kiệm chi phí và thời gian
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-6 h-6 text-destructive" />
              <h3 className="font-display font-bold text-2xl md:text-3xl">Vấn đề hiện tại</h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover-elevate transition-all"
                    data-testid={`problem-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-1">{problem.title}</h4>
                        <p className="text-sm text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <h3 className="font-display font-bold text-2xl md:text-3xl">Giải pháp URP</h3>
            </div>
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                URP cung cấp nền tảng kết nối doanh nghiệp với sinh viên có năng lực được xác thực
                qua hệ thống đánh giá khoa học.
              </p>
              <div className="space-y-3 mb-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`solution-${index}`}>
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{solution}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full group" data-testid="button-employer-contact">
                Xem thêm cho Doanh nghiệp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
