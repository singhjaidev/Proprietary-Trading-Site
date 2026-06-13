import Link from "next/link";
import Container from "./Container";
import { navigation } from "@/constants/navigation";
import Image from "next/image";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[var(--color-background-dark)] border-b border-[var(--color-border)]">
            <Container>
                <div className="flex h-24 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4">
                        <Image
                            src="/Logo.jpg"
                            alt="My Trading Capital"
                            width={80}
                            height={80}
                            priority
                            className="object-contain"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center gap-14">
                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="
                  text-[17px]
                  font-medium
                  transition-colors
                  hover:text-[var(--color-primary)]
                "
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-8">

                        <Link
                            href="/login"
                            className="
                text-[17px]
                font-medium
                transition-colors
                hover:text-[var(--color-primary)]
              "
                        >
                            Log In
                        </Link>

                        <Link
                            href="/get-started"
                            className="
                rounded-2xl
                bg-[var(--color-primary)]
                px-7
                py-4
                text-white
                font-semibold
                transition-colors
                hover:bg-[var(--color-primary-dark)]
              "
                        >
                            Get Started
                        </Link>

                    </div>

                </div>
            </Container>
        </header>
    );
}