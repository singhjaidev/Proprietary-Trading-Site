import { cn } from "@/lib/cn";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "body" | "bodyLg" | "small";
  color?: "primary" | "secondary" | "danger";
};

export default function Text({
  children,
  className,
  size = "body",
  color = "secondary",
}: Props) {
  return (
    <p
      className={cn(
        typography[size],
        colors.text[color],
        className
      )}
    >
      {children}
    </p>
  );
}