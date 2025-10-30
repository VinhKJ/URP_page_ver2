# University Readiness Passport (URP) - Landing Page

## Project Overview
URP is a comprehensive skill verification platform that helps students validate their competencies through scientific assessments based on the ATC21S framework. The platform provides a Digital Skill Passport with a Radar of 6 essential skills and integrates environmental impact through a "Learn to Earn Green" token system.

**Tagline**: "Your Skills. Verified. Your Future. Empowered."

## Recent Changes
- **2025-01-30**: Completed MVP landing page with all core sections
  - Implemented complete database schema for users, refresh tokens, and assessment results (SJT, MBTI, DISC)
  - Built all frontend components following design guidelines (Header, Hero, Features, Team, FAQ, etc.)
  - Created authentication page with login/register forms
  - Configured Inter + Space Grotesk fonts and design tokens
  - Prepared for microservices architecture (test.urp.com, profile.urp.com)

## User Preferences
- Language: Vietnamese (primary audience)
- Design Style: Professional, modern, credible - inspired by Linear, Notion, and Stripe
- Color Scheme: Blue primary (trust/verification) + Green accent (environmental impact)
- Target Audience: Dual - Students seeking skill verification AND Enterprises seeking verified candidates

## Project Architecture

### Tech Stack
- **Frontend**: React + TypeScript + Tailwind CSS + Wouter (routing)
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Authentication**: Passport.js with session-based auth
- **UI Components**: Shadcn UI (customized)
- **Forms**: React Hook Form + Zod validation

### Database Schema
```typescript
// Core tables
users              // User accounts (id, username, password, name, email)
refresh_tokens     // JWT refresh tokens for auth
sjt_results        // SJT test results with Radar 6 Skills (radarScores: JSONB)
mbti_results       // MBTI personality assessment results
disc_results       // DISC behavioral assessment results
```

### Application Structure
```
Landing Page (urp.com)
├── Header (Fixed navigation with auth CTAs)
├── Hero (Value proposition + Radar mockup)
├── Trust Metrics (ATC21S, 170+ students, partners)
├── How It Works (4-step journey)
├── Features
│   ├── Radar 6 Skills (Teamwork, Communication, Critical Thinking, Creativity, Collaboration, ICT)
│   └── Green Token (Learn to Earn Green gamification)
├── Microservice CTAs
│   ├── Test SJT → test.urp.com
│   └── MBTI/DISC → profile.urp.com
├── B2B Employer Section (Recruitment value prop)
├── Team (5 members: Phương, Vinh, Quyên, Quỳnh, Châu)
├── FAQ (8 common questions)
└── Footer (Contact, links, social)

Auth Page (/auth)
├── Login Form
├── Register Form
└── Hero Section (Right column)
```

## Key Features

### For Students
1. **SJT Assessment**: 20-question Situational Judgment Test (~15 minutes)
2. **Radar 6 Skills**: Comprehensive skill visualization based on ATC21S framework
3. **Digital Passport**: QR-verified skill credentials
4. **Green Tokens**: Earn tokens for learning activities, contribute to real tree planting
5. **Personality Tests**: MBTI and DISC assessments for self-discovery

### For Employers (B2B)
1. **Verified Talent Pool**: Access students with validated skill profiles
2. **Skill-Based Filtering**: Filter candidates by 6 core competencies
3. **Cost Reduction**: 60% reduction in training time for new hires
4. **Scientific Data**: ATC21S framework-based assessments

## Microservices Architecture (Planned)

### Service 1: Landing Page (Current - urp.com)
- Public marketing site
- User authentication
- Information and conversion

### Service 2: SJT Assessment App (Future - test.urp.com)
- 20-question SJT test
- AI-powered scoring (AI SkillMap)
- Radar generation
- Results visualization

### Service 3: Profile Dashboard (Future - profile.urp.com)
- User profile management
- Digital Passport with QR code
- MBTI/DISC assessments
- Green Token tracking
- Mini-Project participation

## Design System

### Colors (HSL Format)
- **Primary** (Blue): `217 91% 60%` - Trust, verification, professionalism
- **Accent** (Green): `142 76% 73%` (light) / `142 76% 36%` (dark) - Environmental impact
- **Muted**: Neutral grays for secondary content
- **Destructive**: Red for errors and problems

### Typography
- **Display Font**: Space Grotesk (Hero headlines, section titles)
- **Body Font**: Inter (All content, UI elements)
- **Hierarchy**:
  - H1: text-5xl md:text-6xl lg:text-7xl (Hero)
  - H2: text-4xl md:text-5xl (Sections)
  - H3: text-2xl md:text-3xl (Features)
  - Body: text-base md:text-lg

### Spacing
- Section padding: `py-16 md:py-24 lg:py-32`
- Container max-width: `max-w-7xl`
- Content max-width: `max-w-6xl`
- Text max-width: `max-w-prose`

### Interactions
- Hover: `hover-elevate` (subtle background elevation)
- Active: `active-elevate-2` (more pronounced elevation on press)
- Transitions: 300ms duration for smooth interactions

## Authentication Flow (Planned for Task 2)
1. User clicks "Đăng nhập" or "Test Năng lực ngay"
2. Redirects to /auth page
3. User can login (existing) or register (new)
4. Backend validates with Passport.js
5. Session created with connect-pg-simple
6. User redirected back to homepage (authenticated state)

## Environment Variables
```
DATABASE_URL        # PostgreSQL connection string (Neon)
PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE  # DB credentials
SESSION_SECRET      # Express session secret
```

## Development Notes

### Current Status (Task 1 Complete)
✅ Complete database schema defined
✅ All frontend components built with exceptional visual quality
✅ Responsive design across all breakpoints
✅ Vietnamese language throughout
✅ Design guidelines followed religiously
✅ Accessibility features (aria-labels, semantic HTML)
✅ Authentication page UI ready

### Next Steps (Task 2 - Backend)
- Set up PostgreSQL database with Drizzle ORM
- Implement Passport.js authentication
- Create /api/register, /api/login, /api/logout, /api/user endpoints
- Set up session management with connect-pg-simple
- Run database migrations with `npm run db:push`

### Future Enhancements (Task 3 - Integration)
- Connect auth forms to backend APIs
- Implement useAuth hook and AuthProvider
- Add ProtectedRoute component
- Polish loading states and error handling
- End-to-end testing

## Running the Project
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run db:push      # Push database schema (after backend setup)
```

## Key Metrics & Data Points
- **Framework**: ATC21S (Assessment and Teaching of 21st Century Skills)
- **Survey**: 170+ students participated
- **Skills Assessed**: 6 core competencies
- **Test Duration**: 15-20 minutes (20 questions)
- **Token Rewards**: 50 (test) + 100 (project) + 20 (share)

## Contact & Social
- Email: contact@urp.com
- Phone: +84 123 456 789
- Location: Hà Nội, Việt Nam
- Social: Facebook, LinkedIn, Twitter
