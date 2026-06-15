import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Card from "@/components/common/Card";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function Giveaway() {
  return (
    <Section>
      <Container>

        <div className="grid lg:grid-cols-[1fr_1fr_0.9fr] gap-10 items-start">

          <div>

            <SectionTitle
              badge="Exclusive Giveaway"
              title={
                <>
                  Receive Free
                  <span className="text-[var(--color-primary)]">
                    {" "}Challenge Accounts
                  </span>
                </>
              }
              description="Celebrate our launch with exclusive giveaways."
            />

            <div className="mt-12">

              {/* ADD GIVEAWAY CARD IMAGE HERE */}

            </div>

          </div>

          <Card>

            <Heading level={3}>
              Join The Waitlist
            </Heading>

            <Text className="mt-3">
              Complete the form below to secure your free 5k account.
            </Text>

            <div className="space-y-5 mt-10">

              <input
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <input
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <input
                placeholder="Country"
                className="w-full border rounded-xl p-4"
              />

              <input
                placeholder="City"
                className="w-full border rounded-xl p-4"
              />

            </div>

            <Button className="w-full mt-8 py-5">
              Join Waitlist
            </Button>

          </Card>

          <div>

            <Card>

              <Heading level={3}>
                Complete the actions below
              </Heading>

              <div className="space-y-5 mt-8">

                <Text>✓ Join Discord community</Text>

                <Text>✓ Follow on X</Text>

                <Text>✓ Follow Instagram</Text>

                <Text>✓ Subscribe to email list</Text>

              </div>

            </Card>

          </div>

        </div>

      </Container>
    </Section>
  );
}