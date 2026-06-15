import { cn } from "@/lib/cn";
import { spacing } from "@/styles/spacing";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6", 
        spacing.container,
        className
      )}
    >
      {children}
    </div>
  );
}