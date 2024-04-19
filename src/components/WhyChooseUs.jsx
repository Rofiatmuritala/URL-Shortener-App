// import { Heading, Highlight } from "@chakra-ui/layout";
import React from "react";
import { Hero } from "./Hero";
import { TrackWebsite } from "./TrackWebsite";
import { TrackDevice } from "./TrackDevice";

export const WhyChooseUs = () => {
  return (
    <div>
      {/* component  */}
      <div class="relative">
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
          <Hero />
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-teal-600 text-white">
          <TrackWebsite />
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gray-600 text-white">
          <TrackDevice />
        </div>
       
      </div>
      {/* <Heading lineHeight="tall">
        <Highlight
          query={["spotlight", "emphasize", "Accentuate"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
        >
          With the Highlight component, you can spotlight, emphasize and
          accentuate words.
        </Highlight>
      </Heading> */}
    </div>
  );
};
