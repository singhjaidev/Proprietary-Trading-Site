import Card from "@/components/common/Card";

import Heading from "./Heading";
import IconCircle from "./IconCircle";
import Text from "./Text";

import { cn } from "@/lib/cn";

import { colors } from "@/styles/colors";
import { effects } from "@/styles/effects";
import { spacing } from "@/styles/spacing";

import {
  BadgeDollarSign,
  Clock3,
} from "lucide-react";

type Props = {
  accountSize: string;
};

export default function FundingProgramCard({
  accountSize,
}: Props) {
  return (
    <Card
      className={cn(
        "relative text-center",
        effects.transition,
        "hover:-translate-y-1 hover:shadow-xl"
      )}
    >
        
      {/* Icon */}
      <IconCircle
        size="sm"
        className="mx-auto"
      >
        <BadgeDollarSign
          size={20}
          className={cn(colors.text.primaryBrand)}
        />
      </IconCircle>

      {/* Account size */}
      <div className={spacing.cardGap}>
        <Heading level={3}>
          {accountSize}
        </Heading>

        <Text>
          ACCOUNT SIZE
        </Text>
      </div>

      {/* Profit split */}
      <div className={cn(spacing.cardGap)}>
        <Heading level={3}>
          Up to 90%
        </Heading>

        <Text>
          PROFIT SPLIT
        </Text>
      </div>

      {/* Coming soon */}
      <div
        className={cn(
          "mx-auto flex items-center justify-center gap-2",
          "rounded-full px-6 py-3",
          "border bg-[var(--color-primary-soft)]",
          colors.border.primary, spacing.cardGap
        )}
      >
        <Clock3
          size={18}
          className={colors.text.primaryBrand}
        />

        <Text
          color="primary"
          className="font-semibold"
        >
          COMING SOON
        </Text>
      </div>

      {/* Accent */}
      <div
        className={cn(
          "absolute bottom-0 left-10 right-10 h-[3px] rounded-full",
          colors.bg.primary
        )}
      />
    </Card>
  );
}