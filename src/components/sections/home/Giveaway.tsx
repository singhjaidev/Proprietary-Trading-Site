'use client';

import React from 'react';
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Card from "@/components/common/Card";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

export default function Giveaway() {
  return (
    <Section className="relative bg-[#fafafa] overflow-hidden py-20">
      {/* Subtle Background Energy / Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-[#d20606]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-8 items-start">
          
          {/* LEFT COLUMN: Title & 3D CSS Card */}
          <div className="pr-4 lg:pr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#d20606]/20 bg-[#d20606]/5 text-[#d20606] text-sm font-bold tracking-wide">
              <GiftIcon className="w-4 h-4" />
              EXCLUSIVE GIVEAWAY
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] mb-6">
              Receive Free <br />
              <span className="text-[#d20606]">Challenge Accounts</span>
            </h2>
            
            <Text className="text-lg text-gray-600 mb-8 max-w-md">
              Celebrate our launch with exclusive giveaways. Join our waitlist for a guaranteed giveaway. Each person will receive a <strong className="text-black">$5000 2-step</strong> simulated challenge account.
            </Text>

            {/* PURE CSS 3D ELEMENT - No Images Used */}
            <div className="mt-12 group perspective-1000">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                  0% { transform: translateY(0px) rotateX(10deg) rotateY(-5deg); }
                  50% { transform: translateY(-15px) rotateX(15deg) rotateY(-2deg); }
                  100% { transform: translateY(0px) rotateX(10deg) rotateY(-5deg); }
                }
                .animate-3d-float {
                  animation: float 6s ease-in-out infinite;
                  transform-style: preserve-3d;
                }
              `}} />
              
              <div className="relative w-full max-w-[400px] h-[240px] animate-3d-float transition-all duration-500 hover:scale-105 cursor-pointer">
                {/* Back shadow for depth */}
                <div className="absolute -inset-4 bg-[#d20606]/20 blur-2xl rounded-3xl translate-z-[-50px]"></div>
                
                {/* The Main 3D Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl border border-gray-800 shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
                  
                  {/* Decorative Abstract Shapes inside Card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d20606]/10 rounded-bl-full"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <span className="inline-block bg-[#d20606] text-white text-xs font-bold px-3 py-1 rounded">
                      GIVEAWAY
                    </span>
                    <h3 className="text-[#d20606] text-6xl font-black mt-4 drop-shadow-lg tracking-tighter">
                      $5,000
                    </h3>
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-white font-bold text-xl tracking-wide uppercase">
                      2-Step Simulated
                    </p>
                    <p className="text-gray-400 font-medium text-sm tracking-widest uppercase mt-1">
                      Challenge Account
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Waitlist Form */}
          <Card className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <UsersIcon className="w-6 h-6 text-[#d20606]" />
              <Heading level={3} className="text-2xl font-bold">
                Join the Waitlist
              </Heading>
            </div>
            <Text className="text-gray-500 mb-8 text-sm">
              Complete the form below to secure your free 5k account.
            </Text>

            <form className="space-y-4">
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#d20606] focus:ring-1 focus:ring-[#d20606] transition-all"
                />
              </div>

              <div className="relative">
                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#d20606] focus:ring-1 focus:ring-[#d20606] transition-all"
                />
              </div>

              <div className="relative">
                <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#d20606] focus:ring-1 focus:ring-[#d20606] transition-all"
                />
              </div>

              <div className="relative">
                <GlobeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#d20606] focus:ring-1 focus:ring-[#d20606] transition-all appearance-none text-gray-500">
                  <option value="">Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#d20606] focus:ring-1 focus:ring-[#d20606] transition-all"
                />
              </div>

              <Button className="w-full mt-6 py-4 bg-[#d20606] hover:bg-[#a50505] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#d20606]/30 transition-all flex justify-center items-center gap-2 group">
                Join Waitlist
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                <LockIcon className="w-3 h-3" />
                <p>We respect your privacy. No spam, ever.</p>
              </div>
            </form>
          </Card>

          {/* RIGHT COLUMN: Action Steps */}
          <div className="flex flex-col gap-6">
            
            {/* Free 5k Account Actions */}
            <Card className="bg-white p-7 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-gray-100">
              <Heading level={3} className="text-xl font-bold leading-tight">
                Complete the actions below <br/>
                <span className="font-medium text-base text-gray-500">to receive a free 5k account.</span>
              </Heading>

              <div className="space-y-4 mt-6">
                <ActionItem text="Join our Discord community" />
                <ActionItem text="Follow us on X (Twitter)" />
                <ActionItem text="Follow us on Instagram" />
                <ActionItem text="Subscribe to our email list" />
              </div>
            </Card>

            {/* $10,000 Chance Card */}
            <Card className="bg-[#fff5f5] p-7 rounded-3xl border border-[#d20606]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d20606]/5 rounded-bl-[100px]"></div>
              
              <div className="flex items-start gap-3 relative z-10">
                <GiftIcon className="w-8 h-8 text-[#d20606] shrink-0" />
                <Heading level={3} className="text-lg font-bold">
                  For a chance to win a <br/>
                  <span className="text-[#d20606] text-xl">$10,000 account</span>
                </Heading>
              </div>

              <Text className="text-xs text-gray-600 mt-4 mb-5 relative z-10 leading-relaxed">
                Complete the following tasks and send the screenshot along with your name and city to: <a href="mailto:admin@mytradingcapital.com" className="font-bold text-[#d20606] hover:underline">admin@yourdomain.com</a>
              </Text>

              <div className="space-y-3 relative z-10">
                <MiniActionItem icon={<DiscordIcon />} text="Join our discord" />
                <MiniActionItem icon={<TwitterIcon />} text="Follow us on Instagram, Facebook and X." />
                <MiniActionItem icon={<UsersIcon className="w-4 h-4" />} text="Invite 3 friends to our Discord" />
                <MiniActionItem icon={<TagIcon className="w-4 h-4" />} text="Tag 4 of your trading friends on our giveaway post in Instagram and X." />
                <MiniActionItem icon={<UserPlusIcon className="w-4 h-4" />} text="Referring traders to our waitlist." />
              </div>
            </Card>

          </div>
        </div>
      </Container>
    </Section>
  );
}

/* =========================================
   TYPESCRIPT INTERFACES
========================================= */

interface ActionItemProps {
  text: string;
}

interface MiniActionItemProps {
  icon: React.ReactNode;
  text: string;
}

/* =========================================
   HELPER COMPONENTS & SVG ICONS
========================================= */

function ActionItem({ text }: ActionItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-[#d20606] flex items-center justify-center shrink-0 shadow-sm shadow-[#d20606]/40">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}

function MiniActionItem({ icon, text }: MiniActionItemProps) {
  return (
    <div className="flex items-start gap-3 border-b border-[#d20606]/10 pb-3 last:border-0 last:pb-0">
      <div className="mt-0.5 text-black shrink-0">{icon}</div>
      <span className="text-xs text-gray-700 font-medium leading-tight">{text}</span>
    </div>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>;
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>;
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
}

function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>;
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
}

function UserPlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>;
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
}

function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;
}

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} className={props.className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>;
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} className={props.className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}