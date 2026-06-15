"use client";

import { ZODIACS } from "@/lib/constants";
import { IdentityForm, identitySchema } from "@/lib/schemas/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

type IdentityStepProps = {
  defaultValues: IdentityForm;
  onNext: (values: IdentityForm) => void;
};

export const IdentityStep = ({ defaultValues, onNext }: IdentityStepProps) => {
  const form = useForm<IdentityForm>({
    resolver: zodResolver(identitySchema),
    defaultValues,
  });

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-xl border border-border/50 shadow-xl shadow-foreground/2">
      <div className="mb-6 space-y-1.5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Tell us about yourself
        </h2>
        <p className="text-sm text-muted-foreground">
          Please enter your details to personalize your profile experience.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onNext)} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
              Name
            </label>
            <Input
              className="h-11 rounded-lg w-full bg-background/50 border-muted focus-visible:ring-2 focus-visible:ring-primary/20 transition-all duration-200"
              {...form.register("firstName")}
              placeholder="Tywin"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
              Surname
            </label>
            <Input
              className="h-11 rounded-lg w-full bg-background/50 border-muted focus-visible:ring-2 focus-visible:ring-primary/20 transition-all duration-200"
              {...form.register("lastName")}
              placeholder="Lannister"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
            Zodiac Sign
          </label>
          <Controller
            control={form.control}
            name="zodiac"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full h-11 rounded-lg bg-background/50 border-muted text-left focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                  <SelectValue placeholder="Select your zodiac sign" />
                </SelectTrigger>
                <SelectContent className="max-h-60 rounded-lg bg-popover border-border shadow-lg">
                  {ZODIACS.map((zodiac) => {
                    const Icon = zodiac.icon;
                    return (
                      <SelectItem
                        key={zodiac.id}
                        value={zodiac.title}
                        className="cursor-pointer focus:bg-accent focus:text-accent-foreground py-2.5 px-3 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-3 font-medium text-sm">
                          {Icon && <Icon size={4} className="text-muted-foreground group-hover:text-foreground transition-colors" />}
                          <span>{zodiac.title}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="pt-2 w-full flex">
          <Button
            variant={"default"}
            type="submit"
            className="cursor-pointer ml-auto"
          >
            <span>Next Step</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};