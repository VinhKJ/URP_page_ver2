import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Phương",
    role: "Product Lead",
    bio: "Chuyên gia về phát triển sản phẩm giáo dục",
    initials: "P",
  },
  {
    name: "Vinh",
    role: "Tech Lead",
    bio: "10+ năm kinh nghiệm phát triển phần mềm",
    initials: "V",
  },
  {
    name: "Quyên",
    role: "UX Designer",
    bio: "Đam mê thiết kế trải nghiệm người dùng",
    initials: "Q",
  },
  {
    name: "Quỳnh",
    role: "Data Scientist",
    bio: "Chuyên gia về AI và phân tích dữ liệu",
    initials: "Q",
  },
  {
    name: "Châu",
    role: "Marketing Lead",
    bio: "Chuyên gia về chiến lược và truyền thông",
    initials: "C",
  },
];

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Đội ngũ URP</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Đội ngũ chuyên gia đam mê thay đổi cách đánh giá và phát triển kỹ năng
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:-translate-y-1 transition-all duration-300"
              data-testid={`team-member-${index}`}
            >
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
              <div className="flex items-center justify-center gap-2">
                <button
                  className="w-8 h-8 rounded-lg hover-elevate active-elevate-2 flex items-center justify-center"
                  aria-label="LinkedIn"
                  data-testid={`linkedin-${index}`}
                >
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                </button>
                <button
                  className="w-8 h-8 rounded-lg hover-elevate active-elevate-2 flex items-center justify-center"
                  aria-label="Email"
                  data-testid={`email-${index}`}
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
