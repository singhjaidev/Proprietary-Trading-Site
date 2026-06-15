import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

type Props = {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  color?: "primary" | "brand";
};

export default function Heading({
  children,
  level = 2,
  className,
  color = "primary",
}: Props) {
  const styles = {
    1: typography.h1,
    2: typography.h2,
    3: typography.h3,
  };

  const Tag: ElementType =
    level === 1
      ? "h1"
      : level === 2
        ? "h2"
        : "h3";

  return (
    <Tag
      className={cn(
        styles[level],
        color === "brand"
          ? colors.text.primaryBrand
          : colors.text.primary,
        className
      )}
    >
      {children}
    </Tag>
  );
}