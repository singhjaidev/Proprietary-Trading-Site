import { LucideIcon } from "lucide-react";
import Heading from "./Heading";
import Text from "./Text";

type Props = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export default function StatCard({
  icon: Icon,
  value,
  label,
}: Props) {
  return (
    <div className="text-center">
      <Icon className="mx-auto mb-3 text-[var(--color-primary)]" />

      <Heading level={3}>
        {value}
      </Heading>

      <Text>
        {label}
      </Text>
    </div>
  );
}