import { Link } from "wouter";
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="font-display font-bold text-xl">URP</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Xác thực năng lực thực tế, trao quyền cho tương lai của bạn với University Readiness
              Passport.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border hover-elevate active-elevate-2 flex items-center justify-center"
                aria-label="Facebook"
                data-testid="social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border hover-elevate active-elevate-2 flex items-center justify-center"
                aria-label="LinkedIn"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border hover-elevate active-elevate-2 flex items-center justify-center"
                aria-label="Twitter"
                data-testid="social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#test-radar">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Test Radar
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#kham-pha">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Khám phá Bản thân
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#doanh-nghiep">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Dành cho Doanh nghiệp
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Chính sách Bảo mật
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@urp.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@urp.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+84 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Hà Nội, Việt Nam
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 University Readiness Passport. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Điều khoản Sử dụng
                </a>
              </Link>
              <Link href="/privacy">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Chính sách Bảo mật
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
