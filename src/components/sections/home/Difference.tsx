import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Card from "@/components/common/Card";

import SectionTitle from "@/components/ui/SectionTitle";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

const items = [
  {
    number: "01",
    title: (
      <>
        TRADERS FIRST,
        <br />
        <span className="text-[var(--color-primary)]">
          ALWAYS.
        </span>
      </>
    ),
    description:
      "Every rule, every update, every decision — we make it with one person in mind: you, the serious trader.",
  },

  {
    number: "02",
    title: (
      <>
        FAIR RULES.
        <br />
        <span className="text-[var(--color-primary)]">
          REAL EDGE.
        </span>
      </>
    ),
    description:
      "No hidden agendas. No fine print. Just transparent rules, realistic targets, and an even playing field for every trader.",
  },

  {
    number: "03",
    title: (
      <>
        KEEP MORE.
        <br />
        <span className="text-[var(--color-primary)]">
          EARN MORE.
        </span>
      </>
    ),
    description:
      "Up to 90% profit splits, fast payouts, and zero pointless delays. You earn it, you keep it.",
  },

  {
    number: "04",
    title: (
      <>
        BUILT TO SCALE.
        <br />
        <span className="text-[var(--color-primary)]">
          BACKED TO GROW.
        </span>
      </>
    ),
    description:
      "From your first payout to multi-million funding — our goal is simple: grow with you, not instead of you.",
  },
];

export default function Difference() {
  return (
    <Section>

      <Container>

        <SectionTitle
          badge="What Makes Us Different"
          title={
            <>
              We Don't Chase
              <br />
              Trends. We Build{" "}
              <span className="text-[var(--color-primary)] italic font-serif">
                Opportunities.
              </span>
            </>
          }
          description="
          We exist to create a trading environment where discipline is rewarded,
          potential is unlocked, and freedom becomes your new standard."
        />

        <div className="grid lg:grid-cols-4 gap-8 mt-20">

          {items.map((item) => (

            <Card
              key={item.number}
              className="
                flex
                flex-col
                justify-between
                min-h-[620px]
              "
            >

              <div>

                <div className="text-5xl font-light text-neutral-100">
                  {item.number}
                </div>

                <div className="mt-6 text-3xl font-bold text-[var(--color-primary)]">
                  {item.number}
                </div>

                <div className="w-10 h-[2px] bg-[var(--color-primary)] mt-3 mb-8" />

                <Heading level={3}>
                  {item.title}
                </Heading>

                <Text className="mt-8">
                  {item.description}
                </Text>

              </div>

              <div className="mt-12">

                {/* ADD IMAGE HERE */}

              </div>

            </Card>

          ))}

        </div>

        <div className="mt-20 border-t pt-10 text-center">

          <Heading level={3}>

            TRADE{" "}
            <span className="text-[var(--color-primary)]">
              FREELY.
            </span>{" "}

            GROW{" "}

            <span className="text-[var(--color-primary)]">
              FEARLESSLY.
            </span>

          </Heading>

        </div>

      </Container>

    </Section>
  );
}