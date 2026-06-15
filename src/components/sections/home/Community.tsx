import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Card from "@/components/common/Card";

import SectionTitle from "@/components/ui/SectionTitle";
import Heading from "@/components/ui/Heading";
import Feature from "@/components/ui/Feature";

import {
  Vote,
  Pencil,
  FlaskConical,
  Calendar,
  Megaphone,
} from "lucide-react";

export default function Community() {
  return (
    <Section>
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <SectionTitle
              badge="Community"
              title={
                <>
                  Help Shape <br />
                  <span className="text-[var(--color-primary)]">
                    The Firm
                  </span>
                </>
              }
              description="As a founding community member you'll have the opportunity to:"
            />

            <div className="mt-12 space-y-6">

              <Feature icon={Vote}>
                Vote on future features
              </Feature>

              <Feature icon={Pencil}>
                Suggest rule improvements
              </Feature>

              <Feature icon={FlaskConical}>
                Participate in beta testing
              </Feature>

              <Feature icon={Calendar}>
                Access exclusive events
              </Feature>

              <Feature icon={Megaphone}>
                Receive early announcements
              </Feature>

            </div>

            <Card className="mt-12">
              <Heading level={3}>
                We want to build this firm
                <span className="text-[var(--color-primary)]">
                  {" "}alongside traders
                </span>
              </Heading>
            </Card>

          </div>

          <div>

            {/* ADD COMMUNITY IMAGE HERE */}

          </div>

        </div>

      </Container>
    </Section>
  );
}