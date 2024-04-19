import React from "react";

export const Hero2 = () => {
  return (
    <div>
      {/* component  */}
      <section class="py-20 bg-white mt-16">
        <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div class="relative">
            <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {" "}
              Level Up Your Ads
            </h2>
            <p class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
              Why struggle to run an ad when you can simple shorten that your
              long URL with KIALY to get to help you with your next ads{" "}
            </p>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                class="rounded-lg shadow-xl"
                src="https://cdn.devdojo.com/images/december2020/dashboard-011.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Create-n-Shorten your long links
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Sharing Made Easy
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Crafting your user experience has never been easier, with our
                intuitive drag'n drop interface you will be creating beatiful
                designs in no time.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                class="rounded-lg shadow-xl"
                src="https://cdn.devdojo.com/images/december2020/dashboard-04.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Know Your Customer
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Optimized For Conversions
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                Backed by data, these website have been crafted for ultimate
                optimization. Now, converting your visitors into customers is
                easier than ever before.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                class="rounded-lg shadow-xl"
                src="https://cdn.devdojo.com/images/december2020/dashboard-03.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Easy to Shorten
              </p>
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">
                Make It Your Own
              </h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">
                All templates and components are fully free. You can use these
                url shortener to know who your potential customer are and as
                well know where your traffic are coming from.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
