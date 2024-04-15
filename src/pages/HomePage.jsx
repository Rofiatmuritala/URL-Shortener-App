import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import Benefit from "../components/Benefit";
import { WhyChooseUs } from "../components/WhyChooseUs";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Benefit />
      <WhyChooseUs />
    </div>
  );
};
