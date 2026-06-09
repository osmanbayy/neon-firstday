"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "@/lib/schemas/login";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("LOGIN DATA:", data);

    // TODO: Implement actual login logic
    router.replace("/");
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const [animationParent] = useAutoAnimate()

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

          <Button type="submit" className="h-11 w-full rounded-xl text-base font-semibold transition-all duration-300 hover:scale-[1.02]" >
            Sign in
          </Button>

        </form>

      </div>
    </div>
  );
}