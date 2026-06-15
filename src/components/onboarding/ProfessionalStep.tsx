"use client";

import { ProfessionalForm, professionalSchema } from "@/lib/schemas/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Navigasyon dinamizmi için
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { DEPARTMENTS } from "@/lib/constants";
import { Button } from "../ui/button";

type ProfessionalStepProps = {
  defaultValues: ProfessionalForm;
  onBack: () => void;
  onNext: (values: ProfessionalForm) => void;
};

export const ProfessionalStep = ({ defaultValues, onBack, onNext }: ProfessionalStepProps) => {
  const form = useForm<ProfessionalForm>({
    resolver: zodResolver(professionalSchema),
    defaultValues,
  });

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-xl border border-border/50 shadow-xl shadow-foreground/2">
      <div className="mb-6 space-y-1.5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Professional Info
        </h2>
        <p className="text-sm text-muted-foreground">
          Tell us about your workplace role and department to set up your workspace.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onNext)} className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
            Department
          </label>
          <Controller
            control={form.control}
            name="department"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full h-11 rounded-lg bg-background/50 border-muted text-left focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent className="max-h-60 rounded-lg bg-popover border-border shadow-lg">
                  {DEPARTMENTS.map((department) => (
                    <SelectItem
                      key={department.id}
                      value={department.title}
                      className="cursor-pointer focus:bg-accent focus:text-accent-foreground py-2.5 px-3 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-2.5 font-medium text-sm">
                        <span>{department.title}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
            Role / Title
          </label>
          <Input
            className="h-11 rounded-lg w-full bg-background/50 border-muted focus-visible:ring-2 focus-visible:ring-primary/20 transition-all duration-200"
            {...form.register("role")}
            placeholder="e.g. Frontend Developer, Product Manager"
          />
        </div>

        <div className="flex items-center justify-between pt-2 w-full">
          <Button
            variant={"secondary"}
            onClick={onBack}
            className="cursor-pointer w-1/4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>

          <Button
            variant={"default"}
            type="submit"
            className="cursor-pointer w-1/4"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};