"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "@/lib/schemas/login";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);

    try {
      const response = await login(data);

      if (response.success && response.user) {
        toast.success(`${response.message} ${response.user.name}`);
        setTimeout(() => {
          router.replace("/");
        }, 500);
      } else {
        toast.error(response.error || response.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  const [animationParent] = useAutoAnimate();

  // Auto focus to mail input
  useEffect(() => {
    setFocus("email")
  }, [setFocus])

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-100 via-gray-50 to-slate-200 px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-md">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back </h1>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to continue to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* EMAIL */}
          <div ref={animationParent} className="space-y-2">
            <label className="text-sm font-medium">Email</label>
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 cursor-pointer"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="block text-sm font-medium text-red-500">{errors.password.message}</span>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-11 w-full rounded-xl text-base font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
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

      </div>
    </div>
  );
}