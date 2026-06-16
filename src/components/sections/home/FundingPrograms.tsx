import Section from "@/components/common/Section";
import Container from "@/components/common/Container";

import SectionTitle from "@/components/ui/SectionTitle";

import FundingProgramCard from "@/components/ui/FundingProgramCard";

const programs = [
    "$10,000",
    "$25,000",
    "$50,000",
    "$100,000",
];

export default function FundingPrograms() {
    return (
        <Section>

            <Container>

                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

                    {/* Left */}

                    <SectionTitle
                        badge="Built For Every Trader"
                        title={
                            <>
                                    Choose The Funding{" "}
That
                                <span className="text-[var(--color-primary)]">  Fits Your Goals
                                </span>
                            </>
                        }
                        description="Start with the account size that suits your trading style and scale as you grow."
                    />


                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {programs.map((size) => (
                        <FundingProgramCard
                            key={size}
                            accountSize={size}
                        />
                    ))}

                </div>

            </Container>

        </Section>
    );
}