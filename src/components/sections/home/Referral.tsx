import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Feature from "@/components/ui/Feature";
import Heading from "@/components/ui/Heading";

import {
  Gift as GiftIcon,
  ChartColumn,
  Star,
  Users,
  Trophy,
  Copy,
  ArrowRight
} from "lucide-react";

// Placeholder data (replace with your dynamic backend data)
const referralLinkBase = "mytradingcapital.com/ref/";
const totalReferrals = 24;
const yourRank = "#7";

export default function Referral() {
  return (
    <Section className="relative overflow-hidden bg-slate-950 text-slate-200">
      
      {/* --- MOODY, HIGH-TECH BACKGROUND --- */}
      {/* Dark Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      
      {/* Deep Red Glowing Orbs (Brand Color Integration) */}
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-[var(--color-primary)] blur-[150px] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-red-900 blur-[150px] opacity-30 pointer-events-none z-0"></div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[600px]">

          {/* LEFT SIDE (Static Content) */}
          <div className="flex flex-col justify-center h-full py-10">
            <div className="mb-2">
                <span className="bg-red-500/10 text-[var(--color-primary)] border border-red-500/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                    Referral Program
                </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-8 leading-tight">
                Invite Traders,
                <br />
                Increase your chance of winning a
                <span className="text-[var(--color-primary)]">
                {" "}free $10,000 account.
                </span>
            </h2>

            <div className="space-y-6 mt-6">
              <div className="flex items-center gap-4 text-slate-300">
                  <GiftIcon className="text-[var(--color-primary)]" size={24} />
                  <span className="text-lg font-medium">Additional giveaway entries</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                  <ChartColumn className="text-[var(--color-primary)]" size={24} />
                  <span className="text-lg font-medium">Higher ranking on leaderboard</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                  <Star className="text-[var(--color-primary)]" size={24} />
                  <span className="text-lg font-medium">Exclusive launch rewards</span>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white">
                The more traders you invite,
                <span className="text-[var(--color-primary)]">
                  {" "}the better your chances of winning.
                </span>
              </h3>
            </div>
          </div>

          {/* RIGHT SIDE (Interactive Dashboard Card) */}
          <div className="relative w-full h-full flex items-center justify-center lg:justify-end py-10">

            {/* MAIN DASHBOARD CARD */}
            <div className="w-full max-w-[500px] bg-slate-900/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-700 relative z-10">
              
              <div className="space-y-8">
                
                {/* Referral Link Area */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                      Your Referral Link
                    </label>
                    <span className="text-xs font-medium bg-red-500/20 text-[var(--color-primary)] px-2 py-1 rounded-md border border-red-500/20">Active</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-950/50 border border-slate-700 rounded-2xl p-2 pl-4 group hover:border-slate-500 transition-colors duration-300">
                    <p className="flex-grow text-slate-300 font-mono text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
                       {referralLinkBase}
                       <span className="text-white font-bold">yourname</span>
                    </p>
                    <button className="bg-slate-800 p-3 rounded-xl shadow-sm border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                        <Copy size={18} />
                    </button>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-6 items-center">
                  <div className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700/50">
                    <Users className="text-slate-400 mx-auto mb-3" size={28} strokeWidth={1.5} />
                    <p className="text-3xl font-bold text-white mb-1">{totalReferrals}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Referrals</p>
                  </div>
                  
                  <div className="bg-red-950/30 rounded-2xl p-6 text-center border border-red-900/50 relative overflow-hidden shadow-[inset_0_0_20px_rgba(210,17,17,0.1)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]"></div>
                    <Trophy className="text-[var(--color-primary)] mx-auto mb-3 drop-shadow-[0_0_8px_rgba(210,17,17,0.5)]" size={28} strokeWidth={1.5} />
                    <p className="text-3xl font-bold text-white mb-1">{yourRank}</p>
                    <p className="text-xs font-bold text-[var(--color-primary)] opacity-90 uppercase tracking-wider">Your Rank</p>
                  </div>
                </div>

                {/* Invite Button */}
                <button className="w-full bg-[var(--color-primary)] text-white font-bold rounded-2xl flex justify-center items-center gap-2 px-6 py-4 shadow-[0_0_20px_rgba(210,17,17,0.3)] hover:shadow-[0_0_30px_rgba(210,17,17,0.5)] transition-all duration-300 group">
                  Invite Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}