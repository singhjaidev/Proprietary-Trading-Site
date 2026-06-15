import Link from "next/link";

import Container from "./Container";
import Logo from "./Logo";

import Heading from "../ui/Heading";
import Text from "../ui/Text";

import { navigation } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/cn";

import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";
import { componentStyles } from "@/styles/components";
import { effects } from "@/styles/effects";
import { Heart } from "lucide-react";
import Badge from "../ui/Badge";

export default function Footer() {
  return (
    <footer
      className={cn(
        "bg-[var(--color-background-dark)]",
        colors.text.light
      )}
    >

      {/* Top */}
      <Container>

        <div
          className={cn(
            "grid gap-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]",
            spacing.sectionSm
          )}
        >

          {/* Brand */}
          <div>

            <Logo />

            <Text
              className="mt-6 max-w-sm"
              color="secondary"
            >
              {siteConfig.description}
            </Text>

            <Text
              className={cn(
                "mt-4",
                effects.transition,
                "hover:text-white"
              )}
              color="secondary"
            >
              {siteConfig.email}
            </Text>

          </div>

          {/* Navigation */}
          <div>

            <Heading
              level={3}
              className={colors.text.light}
            >
              Navigation
            </Heading>

            <div
              className={cn(
                spacing.contentGap,
                "flex flex-col gap-4"
              )}
            >

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

            <Heading
              level={3}
              className={colors.text.light}
            >
              Legal
            </Heading>

            <div
              className={cn(
                spacing.contentGap,
                "flex flex-col gap-4"
              )}
            >

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

          {/* Office Address */}
          <div>

            <Heading
              level={3}
              className={colors.text.light}
            >
              Office Address
            </Heading>

            <div
              className={cn(
                spacing.contentGap,
                spacing.stackMd
              )}
            >

              <Text color="secondary">
                {siteConfig.address.district}

              </Text>

              <Text color="secondary">
                {siteConfig.address.office}

              </Text>

              <Text color="secondary">
                {siteConfig.address.license}

              </Text>

            </div>

          </div>

        </div>

      </Container>

      {/* Divider */}
      <div className={effects.dividerDark} />

      {/* Risk Section */}
      <section className="w-full py-20">

        <div className={spacing.container}>
          <Badge variant="dark">
            Risk Disclosure
          </Badge>
          <Heading
            level={2}
            className={cn(
              colors.text.light,
              spacing.contentGap
            )}
          >
            Important Information & Disclaimer
          </Heading>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">

            <div
              className={cn(
                "rounded-2xl p-6",
                effects.transition,
                "hover:bg-white/[0.02]"
              )}
            >

              <Heading
                level={3}
                className={colors.text.light}
              >
                Simulated Trading Environment
              </Heading>

              <Text
                color="secondary"
                className="mt-5"
              >
                All accounts, challenges, evaluations and funded account
                programs offered by My Trading Capital are conducted in a
                simulated trading environment and do not involve the use of
                client funds or live brokerage execution unless otherwise
                expressly stated.
              </Text>

            </div>

            <div
              className={cn(
                "rounded-2xl p-6",
                effects.transition,
                "hover:bg-white/[0.02]"
              )}
            >

              <Heading
                level={3}
                className={colors.text.light}
              >
                No Investment Services
              </Heading>

              <Text
                color="secondary"
                className="mt-5"
              >
                My Trading Capital does not accept deposits for investment
                purposes, does not provide investment services and does not
                manage customer funds. Participants pay solely for access to
                educational, evaluation and performance assessment services.
              </Text>

            </div>

            <div
              className={cn(
                "rounded-2xl p-6",
                effects.transition,
                "hover:bg-white/[0.02]"
              )}
            >

              <Heading
                level={3}
                className={colors.text.light}
              >
                General Risk Warning
              </Heading>

              <Text
                color="secondary"
                className="mt-5"
              >
                Trading financial markets involves substantial risk and may
                not be suitable for all individuals. Past performance is not
                indicative of future results. Carefully consider your
                objectives, experience and risk tolerance before
                participating.
              </Text>

            </div>

            <div
              className={cn(
                "rounded-2xl p-6",
                effects.transition,
                "hover:bg-white/[0.02]"
              )}
            >

              <Heading
                level={3}
                className={colors.text.light}
              >
                Information Disclaimer
              </Heading>

              <Text
                color="secondary"
                className="mt-5"
              >
                Information provided on this website is for informational
                purposes only and should not be considered financial,
                investment, legal or tax advice.
              </Text>

            </div>

          </div>

        </div>

      </section>

      {/* Divider */}
      <div className={effects.dividerDark} />

      {/* Bottom */}
      <Container>

        <div
          className={cn(
            "flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between",
            "py-10"
          )}
        >

          {/* Left */}
          <div>

            <Text color="secondary">
              © {new Date().getFullYear()} {siteConfig.name}.
              All rights reserved.
            </Text>



          </div>

          <div className="flex items-center gap-1.5">
            <Text color="secondary">
              Built with
            </Text>

            <Heart
              size={18}
              className="text-[var(--color-primary)]"
            />

            <Text color="secondary">
              by
            </Text>

            <a
              href="https://singhjaidev.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                colors.text.light,
                effects.transition,
                "hover:text-[var(--color-primary)]"
              )}
            >
              Jaidev Singh
            </a>
          </div>
          {/* Center */}
          <div className="flex flex-wrap gap-8">
            {navigation
              .filter((item) => item.sections.includes("legal"))
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

      </Container>


    </footer>
  );
}