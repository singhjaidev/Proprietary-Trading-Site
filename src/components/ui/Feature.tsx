import { LucideIcon } from "lucide-react";
import Text from "./Text";

type Props = {
  icon: LucideIcon;
  children: React.ReactNode;
};

export default function Feature({
  icon: Icon,
  children,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        size={18}
        className="text-[var(--color-primary)]"
      />

      <Text size="small">
        {children}
      </Text>
    </div>
  );
}