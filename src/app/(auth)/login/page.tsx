"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "@/lib/schemas/login";


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("LOGIN DATA:", data);

    // TODO: Implement actual login logic
    router.replace("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/30">
      <div className="w-full max-w-md p-6 rounded-2xl border bg-background shadow-sm">

        <h1 className="text-2xl font-semibold mb-6 text-center">
          Login
        </h1>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

          {/* EMAIL */}
          <Input type="email" placeholder="you@example.com" {...form.register("email")} />

          {/* PASSWORD */}
          <Input type="password" placeholder="Your password" {...form.register("password")} />

          <Button type="submit" className="w-full">
            Sign in
          </Button>

        </form>

      </div>
    </div>
  );
}