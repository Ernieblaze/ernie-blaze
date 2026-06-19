import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import WhatITeach from "@/components/WhatITeach";
import InsideMyWorld from "@/components/InsideMyWorld";
import WatchLatest from "@/components/WatchLatest";
import SocialLinks from "@/components/SocialLinks";
import Support from "@/components/Support";
import Checklist from "@/components/Checklist";
import Payment from "@/components/Payment";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <About />
        <WhatITeach />
        <InsideMyWorld />
        <WatchLatest />
        <SocialLinks />
        <Support />
        <Checklist />
        <Payment />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
