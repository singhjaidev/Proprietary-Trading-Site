import { cn } from "@/lib/cn";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

type Props = {
  children: React.ReactNode;
  variant?: "light" | "dark";
};

export default function Badge({ children, variant = "light", }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3"
      )}
    >
      <div className={cn(
        colors.bg.primary,
        variant === "light"
          ? "w-14 h-[2px]"
          : "w-14 h-[1px]"
      )}
      />

      <span
        className={cn(
          typography.label,
          colors.text.primaryBrand,
          variant === "light" && "font-medium"
        )}
      >
        {children}
      </span>
    </div>
  );
}