import { cn } from "@/lib/cn";
import { colors } from "./colors";
import { typography } from "./typography";

export const componentStyles = {
  navLink: cn(
    typography.label,
    colors.text.light,
    "normal-case tracking-normal",
    "transition-colors hover:text-[var(--color-primary)]"
  ),
  
  footerLink: cn(
    typography.body,
    colors.text.secondary,
    "transition-colors hover:text-[var(--color-primary)]"
  ),
};