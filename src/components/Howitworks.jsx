import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Howitworks = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* inspired by tailwindcss.com */}
        <h1 class="text-3xl pt-24 justify-center text-center font-bold">
          Guidelines
        </h1>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-10  items-start p-8">
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h3 class="mb-1 text-gray-500 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">
                  Headless UI
                </span>
                Completely unstyled, fully accessible UI components
              </h3>
              <div class="prose prose-slate prose-sm text-slate-600">
                <p>A guide on how to shorten a link on Kia.ly</p>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h3 class="mb-1 text-gray-500 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">
                  Headless UI
                </span>
                Completely unstyled, fully accessible UI components
              </h3>
              <div class="prose prose-slate prose-sm text-slate-600">
                <p>
                  Guide on how to get all your shorten links and how to delete
                  any of the link
                </p>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h3 class="mb-1 text-gray-500 font-semibold">
                <span class="mb-1 block text-sm leading-6 text-purple-500">
                  Heroicons
                </span>
                Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
              </h3>
              <div class="prose prose-slate prose-sm text-slate-600">
                <p>
                  Guide on how to check your Analytics. How to check the number
                  of clicks for a particular link, the browswer and website its
                  been clicked from.
                </p>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h3 class="mb-1 text-gray-500 font-semibold">
                <span class="mb-1 mt-5 block text-sm leading-6 text-cyan-500">
                  Hero Patterns
                </span>
                Seamless SVG background patterns by the makers of Tailwind CSS.
              </h3>
              <div class="prose prose-slate prose-sm text-slate-600">
                <p>
                  Guide on how to check your Analytics. How to check the number
                  of clicks for a particular link, the country and city its been
                  clicked from.
                </p>
              </div>
            </div>
            <video width="750" height="500" controls>
              <source
                src="https://www.youtube.com/watch?v=JVIktLM5W5Y"
                type="video/mp4"
              />
            </video>
          </li>
        </ul>
        <a
          class="flex text-teal-500 text-2xl text-center bg-black items-center font-extrabold py-6 justify-center rounded-lg"
          href="/user/register"
        >
          Learn more
          <span class="sr-only">
            Seamless SVG background patterns by the makers of Tailwind CSS.
          </span>
        </a>
      </div>
      <Footer />
    </>
  );
};
