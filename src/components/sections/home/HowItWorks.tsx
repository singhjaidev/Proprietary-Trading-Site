import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Card from "@/components/common/Card";

import SectionTitle from "@/components/ui/SectionTitle";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import IconCircle from "@/components/ui/IconCircle";

import {
  User,
  CandlestickChart,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: User,
    title: "Choose your challenge account.",
    description:
      "Select the account size that matches your goals and review all rules before you begin.",
  },
  {
    icon: CandlestickChart,
    title: "Demonstrate your trading skills.",
    description:
      "Trade with discipline while following all risk parameters.",
  },
  {
    icon: BadgeCheck,
    title: "Pass the evaluation.",
    description:
      "Reach the target while respecting risk management rules.",
  },
  {
    icon: TrendingUp,
    title: "Receive a funded account.",
    description:
      "Start trading with real capital and earn up to 90% profit splits.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <Container>

        <SectionTitle
          badge="Trader Journey"
          title={
            <>
              Your Path To <span className="text-[var(--color-primary)]">Funding</span>
            </>
          }
          description="A clear performance-driven journey designed to identify skilled traders and reward discipline."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <Card key={step.title} className="text-center">

              <IconCircle className="mx-auto">
                <step.icon className="text-[var(--color-primary)]" />
              </IconCircle>

              <Heading level={3} className="mt-8">
                {step.title}
              </Heading>

              <Text className="mt-4">
                {step.description}
              </Text>

            </Card>
          ))}
        </div>

      </Container>
    </Section>
  );
}