import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, LineChart, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";

const loginSchema = z.object({
  username: z.string().min(3, "Tên đăng nhập phải có ít nhất 3 ký tự"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

const registerSchema = z.object({
  username: z.string().min(3, "Tên đăng nhập phải có ít nhất 3 ký tự"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const { user, loginMutation, registerMutation } = useAuth();

  useEffect(() => {
    if (user) {
      setLocation("/");
    }
  }, [user, setLocation]);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onLogin = async (values: z.infer<typeof loginSchema>) => {
    loginMutation.mutate(values);
  };

  const onRegister = async (values: z.infer<typeof registerSchema>) => {
    registerMutation.mutate(values);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
                <ArrowLeft className="w-4 h-4" />
                Quay lại trang chủ
              </a>
            </Link>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">U</span>
              </div>
              <span className="font-display font-bold text-2xl">URP</span>
            </div>
            <h1 className="font-display font-bold text-3xl mt-6 mb-2">Chào mừng bạn</h1>
            <p className="text-muted-foreground">
              Đăng nhập hoặc tạo tài khoản để bắt đầu hành trình khám phá năng lực của bạn
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" data-testid="tab-login">
                Đăng nhập
              </TabsTrigger>
              <TabsTrigger value="register" data-testid="tab-register">
                Đăng ký
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                  <FormField
                    control={loginForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tên đăng nhập</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="johndoe"
                            {...field}
                            data-testid="input-login-username"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mật khẩu</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            autoComplete="current-password"
                            {...field}
                            data-testid="input-login-password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loginMutation.isPending}
                    data-testid="button-submit-login"
                  >
                    {loginMutation.isPending ? "Đang xử lý..." : "Đăng nhập"}
                  </Button>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="register">
              <Form {...registerForm}>
                <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
                  <FormField
                    control={registerForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tên đăng nhập</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="johndoe"
                            {...field}
                            data-testid="input-register-username"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mật khẩu</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            autoComplete="new-password"
                            {...field}
                            data-testid="input-register-password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={registerMutation.isPending}
                    data-testid="button-submit-register"
                  >
                    {registerMutation.isPending ? "Đang xử lý..." : "Đăng ký"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>

          <p className="text-xs text-center text-muted-foreground">
            Bằng việc đăng ký, bạn đồng ý với{" "}
            <Link href="/terms">
              <a className="text-primary hover:underline">Điều khoản Sử dụng</a>
            </Link>{" "}
            và{" "}
            <Link href="/privacy">
              <a className="text-primary hover:underline">Chính sách Bảo mật</a>
            </Link>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-12">
        <div className="max-w-lg space-y-8">
          <div>
            <h2 className="font-display font-bold text-4xl mb-4">
              Xác thực năng lực thực tế của bạn
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Khám phá điểm mạnh, nhận được Hộ chiếu Kỹ năng Số được xác minh và kết nối với cơ
              hội việc làm phù hợp.
            </p>
          </div>

          <Card className="p-8 bg-background/50 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Radar 6 Kỹ năng</h3>
                  <p className="text-sm text-muted-foreground">
                    Đánh giá toàn diện dựa trên khung ATC21S
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Được công nhận</h3>
                  <p className="text-sm text-muted-foreground">
                    Kết quả được doanh nghiệp tin tưởng và sử dụng
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Miễn phí 100%</h3>
                  <p className="text-sm text-muted-foreground">
                    Không mất phí cho sinh viên và người tìm việc
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
