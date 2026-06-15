import { cn } from "@/lib/cn";
import { buttons } from "@/styles/buttons";

type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  };

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttons[variant], className)}
      {...props}
    />
  );
}