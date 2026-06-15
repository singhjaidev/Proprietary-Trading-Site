import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { siteConfig } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <Container>

        <div className="grid gap-16 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Logo />

            <Text className="mt-6 max-w-sm">
              Built by traders with over $250,000 in prop firm payouts.
              Fair rules, transparent operations, and payouts you can trust.
            </Text>
          </div>

          {/* Navigation */}
          <div>
            <Heading level={3}>
              Navigation
            </Heading>

            <div className="mt-6 flex flex-col gap-4">
              <FooterLink href="/">
                Home
              </FooterLink>

              <FooterLink href="/about">
                About
              </FooterLink>

              <FooterLink href="/funding-programs">
                Funding Programs
              </FooterLink>

              <FooterLink href="/giveaway">
                Giveaway
              </FooterLink>

              <FooterLink href="/faq">
                FAQ
              </FooterLink>

              <FooterLink href="/contact">
                Contact
              </FooterLink>
            </div>
          </div>

          {/* Legal */}
          <div>
            <Heading level={3}>
              Legal
            </Heading>

            <div className="mt-6 flex flex-col gap-4">
              <FooterLink href="/terms">
                Terms & Conditions
              </FooterLink>

              <FooterLink href="/privacy-policy">
                Privacy Policy
              </FooterLink>

              <FooterLink href="/risk-disclaimer">
                Risk Disclaimer
              </FooterLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <Heading level={3}>
              Contact
            </Heading>

            <div className="mt-6 flex flex-col gap-4">
              <Text>
                {siteConfig.email}
              </Text>

              <Text>
                Questions, partnerships, and support inquiries.
              </Text>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col gap-4 border-t border-[var(--color-border)] py-8 md:flex-row md:items-center md:justify-between">

          <Text size="small">
            © {new Date().getFullYear()} My Trading Capital.
            All rights reserved.
          </Text>

          <Text size="small">
            Built by Traders. Defined by Transparency.
          </Text>

        </div>

      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        text-[var(--color-text-secondary)]
        transition-colors
        hover:text-[var(--color-primary)]
      "
    >
      {children}
    </Link>
  );
}