import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  gap?: "sm" | "md" | "lg";
};

export default function Stack({
  children,
  gap = "md",
}: Props) {

  const gaps = {
    sm: "space-y-3",
    md: "space-y-5",
    lg: "space-y-8",
  };

  return (
    <div className={gaps[gap]}>
      {children}
    </div>
  );
}