"use client";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import FaqItem from "@/components/ui/FaqItem";

import { useState } from "react";

const faqs = [
    {
        question: "When are you launching?",
        answer:
            "We are currently preparing for launch. Join our waitlist to receive updates.",
    },

    {
        question: "Who can participate?",
        answer:
            "Traders from eligible countries who meet our requirements.",
    },

    {
        question: "How do I enter the giveaway?",
        answer:
            "Simply join our waitlist using the registration form.",
    },

    {
        question: "Will there be discounts at launch?",
        answer:
            "Yes. Early subscribers will receive exclusive launch promotions.",
    },

    {
        question: "What trading platforms will be supported?",
        answer:
            "Platform information will be announced before launch.",
    },

    {
        question: "How will payouts work?",
        answer:
            "Detailed payout policies will be released during launch.",
    },

    {
        question: "What is a guaranteed giveaway?",
        answer:
            "Everyone who completes all required tasks during the pre-launch campaign will receive a $5,000 Simulated 2-Step Challenge Account after launch.",
    },

    {
        question: "Who receives the $10,000 account?",
        answer:
            "Ten winners will be selected and announced during launch. Each winner will receive a $10,000 Simulated Challenge Account.",
    },

    {
        question: "Is participation free?",
        answer:
            "Yes. Participation is completely free.",
    },

    {
        question: "Can I participate from any country?",
        answer:
            "Participants from most countries are welcome. Certain jurisdictions may be restricted due to regulations.",
    },

    {
        question: "Can I create multiple entries?",
        answer:
            "No. Duplicate entries may result in disqualification.",
    },

    {
        question: "What happens if I don't win the $10,000 account?",
        answer:
            "You will still receive a $5,000 Simulated 2-Step Challenge Account if you complete all requirements.",
    },

    {
        question: "Why are you running this giveaway?",
        answer:
            "We want to reward early supporters, grow our trading community, and demonstrate our commitment to transparency.",
    },

    {
        question: "Who are the founders?",
        answer:
            "Experienced traders with over $250,000 in prop firm payouts who understand the frustrations traders face.",
    },

    {
        question: "Will there be payout denials or hidden rules?",
        answer:
            "No. Rules and payout requirements will always be transparent and consistently applied.",
    },

    {
        question: "Can I refer friends?",
        answer:
            "Yes. Referrals may increase your chances of receiving future rewards and promotions.",
    },

    {
        question: "What makes your prop firm different?",
        answer:
            "Transparent rules, no hidden conditions, trader-focused support, reliable payouts, and a community-first approach.",
    },

    {
        question: "How can I stay updated?",
        answer:
            "Join our Discord server and follow our social media channels for launch news and promotions.",
    },
];


export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <Section overflowHidden={false}>

            <Container>

                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-24">

                    {/* LEFT */}

                    <div className="lg:sticky top-48 h-fit">
                        <SectionTitle
                            badge="Frequently Asked Questions"
                            title={
                                <>
                                    Everything You
                                    <br />
                                    Need To{" "}
                                    <span className="text-[var(--color-primary)]">
                                        Know
                                    </span>
                                </>
                            }
                        />

                        <Text
                            size="bodyLg"
                            className="mt-8 max-w-md"
                        >
                            Answers to common questions about our launch,
                            giveaways, payouts and funding programs.
                        </Text>

                        <Button className="mt-12">
                            Contact Us
                        </Button>

                    </div>

                    {/* RIGHT */}

                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={faq.question}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index
                                            ? -1
                                            : index
                                    )
                                }
                            />
                        ))}

                    </div>

                </div>

            </Container>

        </Section>
    );
}