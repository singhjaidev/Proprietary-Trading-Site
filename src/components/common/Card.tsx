import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { cards } from "@/styles/cards";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function Card({
  children,
  className,
  variant = "primary",
}: CardProps) {
  return (
    <div
      className={cn(
        cards[variant],
        className
      )}
    >
      {children}
    </div>
  );
}