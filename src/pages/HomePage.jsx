import React from "react";
import { Navbar } from "../components/Navbar";
import Benefit from "../components/Benefit";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Hero2 } from "../components/Hero2";
import { Footer } from "../components/Footer";
// import { Pricing } from "../components/Pricing";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero2 />
      <WhyChooseUs />
      {/* <Pricing /> */}
      <Benefit />
      <Footer />
    </div>
  );
};
