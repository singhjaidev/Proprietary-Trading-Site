import Link from "next/link";

import Container from "./Container";
import Logo from "./Logo";

import Button from "../ui/Button";

import { navigation } from "@/constants/navigation";
import { componentStyles } from "@/styles/components";
import { siteConfig } from "@/constants/site";

export default function Header() {
    return (
        <header
            className="
        sticky top-0 z-50
        border-b border-[var(--color-border)]
        bg-[var(--color-background-dark)]
        backdrop-blur
      "
        >
            <Container>
                <div className="flex h-20 items-center justify-between">

                    <Logo />

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-14">
                        {navigation
                            .filter(item => item.sections.includes("header"))
                            .map(item => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={componentStyles.navLink}
                                >
                                    {item.label}
                                </Link>
                            ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">

                        <Link
                            href={siteConfig.header.login.href}
                            className={componentStyles.navLink}
                        >
                            {siteConfig.header.login.label}
                        </Link>

                        <Button>
                            {siteConfig.header.cta.label}
                        </Button>

                    </div>

                </div>
            </Container>
        </header>
    );
}