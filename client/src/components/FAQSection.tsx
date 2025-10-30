import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "URP là gì và hoạt động như thế nào?",
    answer:
      "URP (University Readiness Passport) là nền tảng đánh giá và xác minh kỹ năng dựa trên khung năng lực ATC21S. Bạn sẽ làm bài test SJT (Situational Judgment Test) 20 câu hỏi, sau đó nhận được Radar 6 Kỹ năng phân tích chi tiết năng lực của bạn.",
  },
  {
    question: "Bài test SJT mất bao lâu để hoàn thành?",
    answer:
      "Bài test SJT chỉ mất khoảng 15-20 phút để hoàn thành. Bạn sẽ trả lời 20 câu hỏi tình huống thực tế, đánh giá cách bạn xử lý các tình huống trong công việc và học tập.",
  },
  {
    question: "Kết quả có được các doanh nghiệp công nhận không?",
    answer:
      "Có, kết quả URP được các doanh nghiệp đối tác công nhận vì dựa trên khung đánh giá khoa học ATC21S. Nhiều doanh nghiệp đang sử dụng URP để sàng lọc và đánh giá ứng viên.",
  },
  {
    question: "Green Token là gì và sử dụng như thế nào?",
    answer:
      "Green Token là hệ thống điểm thưởng khi bạn hoàn thành các hoạt động học tập và rèn luyện kỹ năng. Khi tích lũy đủ token, bạn có thể đóng góp vào các dự án trồng cây thực tế, tạo tác động tích cực cho môi trường.",
  },
  {
    question: "Tôi có thể làm lại bài test không?",
    answer:
      "Bạn có thể làm lại bài test sau 3 tháng để theo dõi sự tiến bộ của mình. Tuy nhiên, kết quả chính thức chỉ được cập nhật sau mỗi lần đánh giá để đảm bảo tính chính xác.",
  },
  {
    question: "URP có miễn phí không?",
    answer:
      "Bài test SJT cơ bản hoàn toàn miễn phí cho sinh viên. Các tính năng nâng cao như Mini-Project và đào tạo chuyên sâu có thể có chi phí, nhưng vẫn được trợ cấp một phần để đảm bảo khả năng tiếp cận.",
  },
  {
    question: "Làm sao để doanh nghiệp có thể sử dụng URP?",
    answer:
      "Doanh nghiệp có thể đăng ký tài khoản doanh nghiệp để truy cập vào hồ sơ ứng viên đã được xác minh, sử dụng bộ lọc theo 6 kỹ năng, và hợp tác xây dựng khung năng lực riêng cho ngành của mình.",
  },
  {
    question: "Dữ liệu cá nhân của tôi có được bảo mật không?",
    answer:
      "Tất cả dữ liệu cá nhân được mã hóa và bảo mật theo tiêu chuẩn quốc tế. Chúng tôi chỉ chia sẻ thông tin với doanh nghiệp khi bạn chủ động cho phép, và bạn có toàn quyền kiểm soát dữ liệu của mình.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tìm hiểu thêm về URP và cách chúng tôi giúp bạn phát triển
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border rounded-xl px-6 data-[state=open]:shadow-sm"
              data-testid={`faq-${index}`}
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-semibold text-base pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
