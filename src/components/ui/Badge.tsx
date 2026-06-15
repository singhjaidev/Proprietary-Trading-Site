import { cn } from "@/lib/cn";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3"
      )}
    >
      <div className={cn(
        colors.bg.primary,
        "w-10 h-[2px]"
      )}
      />

      <span
        className={cn(
          typography.label,
          colors.text.primaryBrand
        )}
      >
        {children}
      </span>
    </div>
  );
}