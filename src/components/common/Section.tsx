import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  pt?: string;
  pb?: string;
  overflowHidden?: boolean;
};

export default function Section({
  children,
  className,
  pt = "pt-24",
  pb = "pb-24", overflowHidden = true,
}: Props) {
  return (
    <section
      className={cn(
        "relative",
        overflowHidden && "overflow-hidden",
        pt,
        pb,
        className
      )}
    >
      {children}
    </section>
  );
}