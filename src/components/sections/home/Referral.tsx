import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Card from "@/components/common/Card";

import SectionTitle from "@/components/ui/SectionTitle";
import Feature from "@/components/ui/Feature";
import Heading from "@/components/ui/Heading";

import {
  Gift,
  ChartColumn,
  Star,
} from "lucide-react";

export default function Referral() {
  return (
    <Section>
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <SectionTitle
              badge="Referral Program"
              title={
                <>
                  Invite Traders,
                  <br />
                  Increase your chance of winning an
                  <span className="text-[var(--color-primary)]">
                    {" "}free $10,000 account.
                  </span>
                </>
              }
            />

            <div className="space-y-8 mt-12">

              <Feature icon={Gift}>
                Additional giveaway entries
              </Feature>

              <Feature icon={ChartColumn}>
                Higher ranking on leaderboard
              </Feature>

              <Feature icon={Star}>
                Exclusive launch rewards
              </Feature>

            </div>

            <Card className="mt-12">
              <Heading level={3}>
                The more traders you invite,
                <span className="text-[var(--color-primary)]">
                  {" "}the better your chances of winning.
                </span>
              </Heading>
            </Card>

          </div>

          <div>

            {/* ADD REFERRAL IMAGE HERE */}

          </div>

        </div>

      </Container>
    </Section>
  );
}