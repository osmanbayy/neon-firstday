"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "@/lib/schemas/login";
import { useAuthStore } from "@/lib/stores/authStore";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ForgotPasswordModal } from "@/components/modals/ForgotPasswordModal";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, user, isAuthenticated } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [forgotModalIsOpen, setForgotModalIsOpen] = useState(false);
  const [animationParent] = useAutoAnimate();

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const onSubmit = async (data: LoginSchema) => {
    const success = await login(data);

    if (success && user) {
      toast.success(`Welcome back ${user.name}`);
      setTimeout(() => {
        router.replace("/home");
      }, 500);
    }
  };

  // Auto focus to mail input
  useEffect(() => {
    setFocus("email")
  }, [setFocus])

  // If already authenticated, redirect to home
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/home");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl backdrop-blur-md">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome Back</h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to continue to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900/40 dark:bg-red-950/40">
              <p className="text-sm font-medium text-red-800 dark:text-red-300">{error}</p>
            </div>
          )}

          {/* EMAIL */}
          <div ref={animationParent} className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="h-11 rounded-xl"
            />
            {errors.email && (
              <span className="block text-sm font-medium text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* PASSWORD */}
          <div ref={animationParent} className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                {...register("password")}
                className="h-11 rounded-xl pr-12"
              />

              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-muted-foreground"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            <span className="flex justify-end text-sm underline cursor-pointer" onClick={() => setForgotModalIsOpen(true)}>
              Forgot Password?
            </span>
            {errors.password && (
              <span className="block text-sm font-medium text-red-500">{errors.password.message}</span>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full rounded-xl text-base font-semibold transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 size={18} className="animate-spin" />
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign in"
            )}
          </Button>

        </form>

        {/* Forgot Password Modal */}
        <ForgotPasswordModal forgotModalIsOpen={forgotModalIsOpen} setForgotModalIsOpen={setForgotModalIsOpen} />

      </div>
    </div>
  );
}