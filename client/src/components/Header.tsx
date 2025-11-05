import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logoutMutation } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b shadow-sm"
          : "bg-background/90 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <a className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-lg px-3 py-2 -ml-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="font-display font-bold text-xl hidden sm:inline">URP</span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="https://sjc-radar-test-1040426527128.us-west1.run.app/" data-testid="link-test-radar">
              <a className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-lg transition-colors">
                Test Radar
              </a>
            </Link>
            <Link href="https://urp-ver1.vercel.app/" data-testid="link-discover">
              <a className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-lg transition-colors">
                Khám phá Bản thân
              </a>
            </Link>
            <Link href="#doanh-nghiep" data-testid="link-employers">
              <a className="px-4 py-2 text-sm font-medium text-foreground hover-elevate active-elevate-2 rounded-lg transition-colors">
                Dành cho Doanh nghiệp
              </a>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full" data-testid="button-user-menu">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                          {user.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{user.username}</p>
                        <p className="text-xs text-muted-foreground">{user.email || 'Chưa có email'}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <a href="https://urp-ver1.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <User className="mr-2 w-4 h-4" />
                        Hồ sơ của tôi
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => logoutMutation.mutate()}
                      disabled={logoutMutation.isPending}
                      className="cursor-pointer text-destructive focus:text-destructive"
                      data-testid="button-logout"
                    >
                      <LogOut className="mr-2 w-4 h-4" />
                      {logoutMutation.isPending ? "Đang đăng xuất..." : "Đăng xuất"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="hidden sm:inline-flex"
                  asChild
                  data-testid="button-login"
                >
                  <Link href="/auth">Đăng nhập</Link>
                </Button>
                <Button asChild data-testid="button-test-now">
                  <Link href="/auth">Test Năng lực ngay</Link>
                </Button>
              </>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2" data-testid="mobile-menu">
            <Link href="#test-radar">
              <a className="block px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-lg">
                Test Radar
              </a>
            </Link>
            <Link href="#kham-pha">
              <a className="block px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-lg">
                Khám phá Bản thân
              </a>
            </Link>
            <Link href="#doanh-nghiep">
              <a className="block px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-lg">
                Dành cho Doanh nghiệp
              </a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
