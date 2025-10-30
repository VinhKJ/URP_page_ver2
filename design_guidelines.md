# URP Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Educational technology platform combining Linear's clean typography, Notion's card-based layouts, and Stripe's restrained professionalism. The design must communicate credibility, scientific rigor (ATC21S framework), and modern innovation for both students and enterprise clients.

## Core Design Principles
1. **Trust & Verification**: Visual language emphasizes data-driven insights and professional credentials
2. **Dual Audience**: Balance student-friendly accessibility with B2B enterprise credibility
3. **Progressive Disclosure**: Each section reveals value incrementally, guiding users through the skill verification journey
4. **Gamification Integration**: Subtle environmental impact elements (Green Token) woven throughout without overwhelming core messaging

## Layout System & Spacing
- **Container Strategy**: max-w-7xl for full-width sections, max-w-6xl for content areas, max-w-prose for text blocks
- **Tailwind Spacing Primitives**: Consistently use units of 4, 6, 8, 12, 16, 20, 24, 32 (e.g., p-8, gap-6, mb-12)
- **Vertical Rhythm**: Section padding py-16 md:py-24 lg:py-32 for major blocks, py-8 md:py-12 for sub-sections
- **Multi-Column Strategy**: 
  - How-it-works: 4-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
  - Features: 2-column split for Radar and Green Token
  - Team: 5-member grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-5)
  - Trust metrics: 3-4 horizontal cards

## Typography Hierarchy
- **Primary Font**: Inter or DM Sans (professional, modern, excellent Vietnamese character support)
- **Display Font**: Space Grotesk or Bricolage Grotesque for hero headlines
- **Scale**:
  - H1 (Hero): text-5xl md:text-6xl lg:text-7xl font-bold
  - H2 (Section): text-4xl md:text-5xl font-bold
  - H3 (Feature): text-2xl md:text-3xl font-semibold
  - Body: text-base md:text-lg leading-relaxed
  - Small: text-sm for metadata, captions

## Header (Fixed Navigation)
- Fixed top navigation with backdrop blur (backdrop-blur-lg bg-white/90)
- Logo left, center navigation links (Test Radar | Khám phá Bản thân | Dành cho Doanh nghiệp)
- Right: Secondary "Đăng nhập" button (outline style), Primary "Test Năng lực ngay" CTA
- Height: h-16 md:h-20, horizontal padding px-6 md:px-8
- Sticky behavior on scroll with subtle shadow transition

## Hero Section
- **Layout**: Two-column asymmetric (60/40 split on desktop)
- **Left Column**: 
  - Small badge/chip: "University Readiness Passport" (subtle background, rounded-full px-4 py-1.5)
  - H1 with gradient text treatment on key words
  - Slogan in larger body text (text-xl opacity-90)
  - Problem statement paragraph (max-w-lg)
  - CTA row with primary + secondary ghost button (gap-4)
- **Right Column**: Large illustration/mockup space for Digital Passport with Radar visualization
- **Height**: min-h-[85vh] allowing natural content flow
- **Images**: Hero includes prominent mockup of "Digital Skill Passport" showing QR code and Radar 6 Skills chart - this is a key visual anchor

## Trust Metrics Strip
- Horizontal scroll on mobile, grid on desktop (grid-cols-3 lg:grid-cols-4)
- Card style: subtle border, rounded-xl, p-6
- Icon + metric + label pattern
- Content: "Dựa trên khung ATC21S", "170+ Sinh viên đã khảo sát", "Đối tác đào tạo" badges

## How It Works (4-Step Timeline)
- Horizontal timeline with connecting lines between cards
- Each card: Icon/number → Title → Description
- Steps: "Làm Test SJT" → "Nhận Radar" → "Rèn luyện" → "Nhận Passport"
- Visual progression indicator (gradient line or arrow sequence)
- Cards with hover lift effect (transform translate-y-1)

## Product Features Section
- **Two-Column Grid**: 
  - Left: Radar 6 Skills showcase with actual radar chart visualization (canvas or SVG)
  - Right: Green Token feature with environmental impact metrics
- Chart must be interactive/animated on scroll
- List of 6 skills with icons: Teamwork, Communication, Critical Thinking, Creativity, Collaboration, ICT Literacy

## Microservice CTA Blocks
- Two distinct, prominent call-to-action cards positioned strategically mid-page
- **Block 1**: "Bạn đã sẵn sàng cho Radar Kỹ năng?" → [Test SJT ngay] (directs to test.urp.com)
- **Block 2**: "Thấu hiểu bản thân?" → [Khám phá MBTI/DISC] (directs to profile.urp.com)
- Full-width cards with gradient backgrounds or visual treatments, large CTAs
- Distinct visual separation between the two blocks

## B2B Employer Section
- Problem/Solution split layout (similar to hero but inverted)
- Left: Pain points with iconography (cost metrics, time waste visualization)
- Right: Solution benefits with checkmarks, "Xem thêm cho Doanh nghiệp" CTA
- Background treatment to distinguish from student-focused sections

## Team Section
- 5-member grid layout (Phương, Vinh, Quyên, Quỳnh, Châu)
- Cards with: Avatar/photo → Name → Role → Brief description
- Consistent card sizing, rounded images, subtle hover states
- Professional yet approachable styling

## FAQ Section
- Accordion pattern with + / - icons
- Questions in Vietnamese, clear typographic hierarchy
- Smooth expand/collapse animations
- Max 6-8 common questions about skill verification process

## Footer
- Three-column layout on desktop, stacked on mobile
- Column 1: Logo + tagline + social links
- Column 2: Quick navigation (Test Radar, Khám phá, Cho Doanh nghiệp)
- Column 3: Contact info, Privacy Policy link
- Bottom bar: Copyright, additional legal links

## Component Library
- **Buttons**: Primary (solid), Secondary (outline), Ghost (text-only). Consistent rounded-lg, px-6 py-3
- **Cards**: Consistent border radius (rounded-xl to rounded-2xl), subtle shadows, hover states with transform
- **Badges/Tags**: rounded-full, small text, varied backgrounds for categorization
- **Input Fields** (auth modal): Consistent height h-12, border styling, focus states with ring
- **Modal** (Login): Centered overlay with backdrop blur, max-w-md, rounded-2xl

## Animations
- Minimal, purposeful animations only
- Scroll-triggered fade-ins for sections (opacity + translate-y)
- Radar chart animated drawing on viewport entry
- Hover states: subtle scale or translate effects (transform scale-105 or translate-y-1)
- NO complex parallax or continuous animations

## Images
- **Hero Image**: Large mockup of Digital Skill Passport showing QR code and Radar visualization (right column)
- **Feature Visuals**: Radar chart illustration, Green Token concept graphic
- **Team Photos**: Professional headshots for 5 members
- **Icons**: Use Heroicons or Lucide for UI icons throughout (skill icons, navigation, features)
- All images should reinforce credibility and modernity

## Accessibility
- Proper heading hierarchy (h1 → h2 → h3)
- Sufficient contrast ratios for text
- Aria-labels for Radar chart data points
- Focus visible states for all interactive elements
- Vietnamese language support throughout (proper diacritics rendering)