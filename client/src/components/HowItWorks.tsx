import { ClipboardList, LineChart, Rocket, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Làm Test SJT",
    description: "Hoàn thành 20 câu hỏi tình huống với AI SkillMap",
  },
  {
    icon: LineChart,
    number: "02",
    title: "Nhận Radar",
    description: "Khám phá Radar 6 Kỹ năng của bạn",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Rèn luyện",
    description: "Tham gia Mini-Project & nhận Feedback",
  },
  {
    icon: Award,
    number: "04",
    title: "Nhận Passport",
    description: "Sở hữu Hộ chiếu Kỹ năng được xác minh",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Làm thế nào để bắt đầu?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Chỉ với 4 bước đơn giản, bạn sẽ có được Hộ chiếu Kỹ năng Số được xác minh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-8 relative hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
                data-testid={`step-card-${index}`}
              >
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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
