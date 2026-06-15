import Link from "next/link";

import Container from "./Container";
import Logo from "./Logo";

import Heading from "../ui/Heading";
import Text from "../ui/Text";

import { navigation } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";

import { componentStyles } from "@/styles/components";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <Container>

        <div className="grid gap-16 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Logo />

            <Text className="mt-6 max-w-sm">
              {siteConfig.description}
            </Text>
          </div>

          {/* Navigation */}
          <div>
            <Heading level={3}>
              Navigation
            </Heading>

            <div className="mt-6 flex flex-col gap-4">
              {navigation
                .filter((item) =>
                  item.sections.includes("footer")
                )
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={componentStyles.footerLink}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <Heading level={3}>
              Legal
            </Heading>

            <div className="mt-6 flex flex-col gap-4">
              {navigation
                .filter((item) =>
                  item.sections.includes("legal")
                )
                .map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={componentStyles.footerLink}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <Heading level={3}>
              Contact
            </Heading>

            <div className="mt-6 space-y-4">
              <Text>
                {siteConfig.email}
              </Text>

              <Text>
                Questions, partnerships, and support inquiries.
              </Text>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-[var(--color-border)] py-8 md:flex-row md:items-center md:justify-between">

          <Text size="small">
            © {new Date().getFullYear()} {siteConfig.name}.
            All rights reserved.
          </Text>

          <Text size="small">
            {siteConfig.title}
          </Text>

        </div>

      </Container>
    </footer>
  );
}