import { cn } from "@/lib/cn";
import { colors } from "@/styles/colors";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function IconCircle({
  children,
  size = "md",
  className,
}: Props) {

  const sizes = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  return (
    <div
      className={cn(
        sizes[size],
        colors.bg.primarySoft,
        "rounded-full flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}