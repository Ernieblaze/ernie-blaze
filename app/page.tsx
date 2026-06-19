import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About";
import WhatITeach from "@/components/WhatITeach";
import Courses from "@/components/Courses";
import Checklist from "@/components/Checklist";
import Support from "@/components/Support";
import Payment from "@/components/Payment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <Hero />
        <SocialLinks />
        <About />
        <WhatITeach />
        <Courses />
        <Checklist />
        <Support />
        <Payment />
      </main>
      <Footer />
    </div>
  );
}
