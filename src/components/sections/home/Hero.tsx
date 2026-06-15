import Container from "@/components/common/Container";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Feature from "@/components/ui/Feature";
import Heading from "@/components/ui/Heading";
import IconCircle from "@/components/ui/IconCircle";
import StatCard from "@/components/ui/StatCard";
import Text from "@/components/ui/Text";

import {
  ShieldCheck,
  Users,
  Eye,
  Mail,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <Section pt="pt-12">
      <Container>
        <div className="grid grid-cols-[1.55fr_1fr] gap-8 items-center">

          {/* LEFT SECTION */}
          <div>

            <Badge>
              Trader First. Transparency Always.
            </Badge>

            <Heading
              level={1}
              className="mt-8"
            >
              <>
                Built by Traders.
                <br />
                <span className="text-[var(--color-primary)]">
                  Defined by Transparency.
                </span>
              </>
            </Heading>

            <Text
              size="bodyLg"
              className="mt-8 max-w-xl"
            >
              Founded by traders with over $250,000 in prop firm payouts.
              Our mission is simple: fair rules, transparent operations,
              and payouts you can trust.
            </Text>

            {/* Features */}
            <div className="flex flex-wrap gap-10 mt-10">
              <Feature icon={ShieldCheck}>
                $250,000+ Paid
              </Feature>

              <Feature icon={Users}>
                Trader Founded
              </Feature>

              <Feature icon={Eye}>
                100% Transparent
              </Feature>
            </div>

            {/* Waitlist Card */}
            <Card className="mt-12 flex items-center justify-between gap-8">

              <div className="flex gap-5">

                <IconCircle>
                  <Mail className="text-[var(--color-primary)]" />
                </IconCircle>

                <div>
                  <Heading level={3}>
                    Join The Founding Trader List
                  </Heading>

                  <Text
                    className="mt-2 max-w-sm"
                  >
                    Get launch updates, giveaway entries,
                    exclusive discounts, and early access opportunities.
                  </Text>
                </div>

              </div>

              <Button className="px-10 py-5 text-lg">
                Join Waitlist
              </Button>

            </Card>

            <Text
              color="danger"
              className="mt-8 text-center text-xl italic"
            >
              Be part of something built for traders, by traders.
            </Text>

          </div>

          {/* RIGHT SECTION */}
          <div className="relative hidden lg:flex items-center justify-center">
          </div>

        </div>

        {/* Bottom Stats */}
        <Card className="mt-16 grid md:grid-cols-4 gap-8">

          <StatCard
            icon={Users}
            value="$250,000+"
            label="Total Payouts"
          />

          <StatCard
            icon={TrendingUp}
            value="5000+"
            label="Traders Empowered"
          />

          <StatCard
            icon={Globe}
            value="150+"
            label="Countries"
          />

          <StatCard
            icon={ShieldCheck}
            value="100%"
            label="Transparency"
          />

        </Card>

      </Container>
    </Section>
  );
}