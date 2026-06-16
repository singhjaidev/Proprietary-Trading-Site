import Hero from "@/components/sections/home/Hero";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Community from "@/components/sections/home/Community";
import Referral from "@/components/sections/home/Referral";
import Giveaway from "@/components/sections/home/Giveaway";
import Difference from "@/components/sections/home/Difference";
import Faq from "@/components/sections/home/Faq";
import FundingPrograms from "@/components/sections/home/FundingPrograms";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Giveaway />
            <Referral />
            <Community />
            <HowItWorks />
            <Difference />
            <FundingPrograms />
            <Faq />
        </>
    );
}