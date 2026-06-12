import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type StatCardProps = ComponentProps<"div">;

type StatCardIconProps = ComponentProps<"div"> & {
  icon: LucideIcon;
};

function StatCardRoot({ className, ...props }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function StatCardIcon({ icon: Icon, className, ...props }: StatCardIconProps) {
  return (
    <div className={cn("rounded-lg border p-2", className)} {...props}>
      <Icon className="size-5" />
    </div>
  );
}

function StatCardLabel({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-muted-foreground text-sm font-sans", className)}
      {...props}
    />
  );
}

function StatCardValue({ className, ...props }: ComponentProps<"strong">) {
  return (
    <strong
      className={cn("block text-3xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

function StatCardHelper({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-muted-foreground mt-1 text-sm", className)}
      {...props}
    />
  );
}

function StatCardTrend({
  className,
  children,
  ...props
}: ComponentProps<"div"> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "mt-4 inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export const StatCard = Object.assign(StatCardRoot, {
  Icon: StatCardIcon,
  Label: StatCardLabel,
  Value: StatCardValue,
  Helper: StatCardHelper,
  Trend: StatCardTrend,
});
