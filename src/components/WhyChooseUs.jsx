import { Heading, Highlight } from "@chakra-ui/layout";
import React from "react";
import { Hero } from "./Hero";

export const WhyChooseUs = () => {
  return (
    <div>
      {/* component  */}
      <div class="relative">
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
          <Hero />
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
          <Hero />
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
          <Hero />
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
          <h2 class="text-4xl">The Fourth Title</h2>
        </div>
      </div>
      <Heading lineHeight="tall">
        <Highlight
          query={["spotlight", "emphasize", "Accentuate"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
        >
          With the Highlight component, you can spotlight, emphasize and
          accentuate words.
        </Highlight>
      </Heading>
    </div>
  );
};
