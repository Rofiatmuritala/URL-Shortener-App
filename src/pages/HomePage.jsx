import React from "react";
import { Navbar } from "../components/Navbar";
// import Benefit from "../components/Benefit";
// import { SlidingHome } from "../components/SlidingHome";
import { HeroHome } from "../components/HeroHome";
import { Footer } from "../components/Footer";
import { CTA } from "../components/CTA";
// import { Pricing } from "../components/Pricing";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CTA />
      <HeroHome />
      {/* <SlidingHome /> */}
      {/* <Pricing /> */}
      {/* <Benefit /> */}
      <Footer />
    </div>
  );
};
