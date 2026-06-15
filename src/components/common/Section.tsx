import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  pt?: string;
  pb?: string;
};

export default function Section({
  children,
  className,
  pt = "pt-24",
  pb = "pb-24",
}: Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[var(--color-background)]",
        pt,
        pb,
        className
      )}
    >
      {children}
    </section>
  );
}