import React from "react";
import { Navbar } from "./Navbar";

export const Pricing = () => {
  return (
    <div>
      {/* component  */}
      <div class="antialiased w-full h-full bg-black text-gray-400 font-inter p-10">
        <div class="container px-4 mx-auto">
          <div>
            <div id="title" class="text-center my-10">
              <h1 class="font-bold text-4xl text-white">Pricing Plans</h1>
              <p class="text-light text-gray-500 text-xl">
                Here are our pricing plans
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
              <div
                id="plan"
                class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div id="title" class="w-full py-5 border-b border-gray-800">
                  <h2 class="font-bold text-3xl text-white">Startup</h2>
                  <h3 class="font-normal text-indigo-500 text-xl mt-2">
                    $9<sup>,99</sup>/month
                  </h3>
                </div>
                <div id="content" class="">
                  <div id="icon" class="my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p class="text-gray-500 text-sm pt-2">
                      Perfect individuals or startups
                    </p>
                  </div>
                  <div id="contain" class="leading-8 mb-10 text-lg font-light">
                    <ul>
                      <li>10 hours of support</li>
                      <li>128MB of storage</li>
                      <li>2048MB bandwith</li>
                      <li>Subdomain included</li>
                    </ul>
                    <div id="choose" class="w-full mt-10 px-6">
                      <a
                        href="#"
                        class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                      >
                        Choose
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="plan"
                class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div id="title" class="w-full py-5 border-b border-gray-800">
                  <h2 class="font-bold text-3xl text-white">Corporate</h2>
                  <h3 class="font-normal text-indigo-500 text-xl mt-2">
                    $12<sup>,99</sup>/month
                  </h3>
                </div>
                <div id="content" class="">
                  <div id="icon" class="my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <p class="text-gray-500 text-sm pt-2">
                      Perfect for teams up to 12 people
                    </p>
                  </div>
                  <div id="contain" class="leading-8 mb-10 text-lg font-light">
                    <ul>
                      <li>10 hours of support</li>
                      <li>1024MB of storage</li>
                      <li>4GB bandwith</li>
                      <li>Domain included</li>
                    </ul>
                    <div id="choose" class="w-full mt-10 px-6">
                      <a
                        href="#"
                        class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                      >
                        Choose
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="plan"
                class="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div id="title" class="w-full py-5 border-b border-gray-800">
                  <h2 class="font-bold text-3xl text-white">Enterprise</h2>
                  <h3 class="font-normal text-indigo-500 text-xl mt-2">
                    $19<sup>,99</sup>/month
                  </h3>
                </div>
                <div id="content" class="">
                  <div id="icon" class="my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <p class="text-gray-500 text-sm pt-2">
                      Perfect large scale team
                    </p>
                  </div>
                  <div id="contain" class="leading-8 mb-10 text-lg font-light">
                    <ul>
                      <li>10 hours of support</li>
                      <li>10GB of storage</li>
                      <li>100GB bandwith</li>
                      <li>Domain included</li>
                    </ul>
                    <div id="choose" class="w-full mt-10 px-6">
                      <a
                        href="#"
                        class="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                      >
                        Choose
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header class="max-w-6xl mx-auto py-8 px-5 flex justify-between lg:px-8">
        {/* <a href="#/" class="text-2xl text-gray-900 font-semibold">
          price<span class="text-indigo-600">ly</span>
        </a> */}

        <Navbar />
      </header>
      <main class="max-w-6xl mx-auto pt-10 pb-36 px-8">
        <div class="max-w-md mx-auto mb-14 text-center">
          <h1 class="text-4xl font-semibold mb-6 lg:text-5xl">
            <span class="text-indigo-600">Flexible</span> Plans
          </h1>
          <p class="text-xl text-gray-500 font-medium">
            Choose a plan that works best for you and your team.
          </p>
        </div>

        <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start">
          <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
            <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                class="rounded-3xl w-20 h-20"
              />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">Basic</span>
                <span>
                  <span class="font-medium text-gray-500 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span class="text-3xl font-bold">10 </span>
                </span>
                <span class="text-gray-500 font-medium">/ user</span>
              </div>
            </div>
            <ul class="mb-7 font-medium text-gray-500">
              <li class="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  Get started with <span class="text-black">messaging</span>
                </span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  Flexible <span class="text-black">team meetings</span>
                </span>
              </li>
              <li class="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  <span class="text-black">5 TB</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                class="ml-2"
              />
            </a>
          </div>

          <div class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
            <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                alt=""
                class="rounded-3xl w-20 h-20"
              />
              <div class="ml-5">
                <span class="block text-3xl font-semibold text-white">
                  Startup
                </span>
                <span>
                  <span class="font-medium text-xl align-top">$&thinsp;</span>
                  <span class="text-3xl font-bold text-white">24 </span>
                </span>
                <span class="font-medium">/ user</span>
              </div>
            </div>
            <ul class="mb-10 font-medium text-xl">
              <li class="flex mb-6">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span class="ml-3">
                  All features in <span class="text-white">Basic</span>
                </span>
              </li>
              <li class="flex mb-6">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span class="ml-3">
                  Flexible <span class="text-white">call scheduling</span>
                </span>
              </li>
              <li class="flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span class="ml-3">
                  <span class="text-white">15 TB</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              class="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                class="ml-2"
              />
            </a>
          </div>

          <div class="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
            <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                class="rounded-3xl w-20 h-20"
              />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">Enterprise</span>
                <span>
                  <span class="font-medium text-gray-500 text-xl align-top">
                    $&thinsp;
                  </span>
                  <span class="text-3xl font-bold">35 </span>
                </span>
                <span class="text-gray-500 font-medium">/ user</span>
              </div>
            </div>
            <ul class="mb-7 font-medium text-gray-500">
              <li class="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  All features in <span class="text-black">Startup</span>
                </span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  Growth <span class="text-black">oriented</span>
                </span>
              </li>
              <li class="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  <span class="text-black">Unlimited</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              class="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                class="ml-2"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

//  component
{
  /* <div class="bg-gradient-to-b from-pink-100 to-purple-200">
    <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 class="text-2xl text-pink-900 font-bold md:text-4xl">A Tailus Blocks subscription gives you access to our components and more.</h2>
        </div>
        <div class="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div class="relative p-6 space-y-6 lg:p-8">
                    <h3 class="text-3xl text-gray-700 font-semibold text-center">Organisation</h3>
                    <div>
                        <div class="relative flex justify-around">
                            <div class="flex items-end">
                                <span class="text-8xl text-gray-800 font-bold leading-0">35</span>
                                <div class="pb-2">
<span class="block text-2xl text-gray-700 font-bold">%</span>
<span class="block text-xl text-purple-500 font-bold">Off</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul role="list" class="w-max space-y-4 py-6 m-auto text-gray-600">
                        <li class="space-x-2">
                            <span class="text-purple-500 font-semibold">&check;</span>
                            <span>First premium advantage</span>
                        </li>
                        <li class="space-x-2">
                            <span class="text-purple-500 font-semibold">&check;</span>
                            <span>Second advantage weekly</span>
                        </li>
                        <li class="space-x-2">
                            <span class="text-purple-500 font-semibold">&check;</span>
                            <span>Third advantage donate to project</span>
                        </li>
                    </ul>
                    <p class="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                        <span>Call us at</span>
                        <a href="tel:+24300" class="flex space-x-2 items-center text-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <span class="font-semibold">+1 000 000</span>
                        </a>
                        <span>or</span>
                    </p>
                    <button type="submit" title="Submit" class="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600">
                        <span class="text-white font-semibold">
                            Send us an email
                        </span>
                    </button>
                </div>
            </div>

            <div class="relative group md:w-6/12 lg:w-7/12">
                <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>
                <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                    <ul role="list" class="space-y-4 py-6 text-gray-600">
                        <li class="space-x-2">
                            <span class="text-purple-500 font-semibold">&check;</span>
                            <span>First premium advantage</span>
                        </li>
                        <li class="space-x-2">
                            <span class="text-purple-500 font-semibold">&check;</span>
                            <span>Second advantage weekly</span>
                        </li>
                        <li class="space-x-2">
                            <span class="text-purple-500 font-semibold">&check;</span>
                            <span>Third advantage donate to project</span>
                        </li>
                        <li class="space-x-2">
                            <span class="text-purple-500 font-semibold">&check;</span>
                            <span>Fourth, access to all components weekly</span>
                        </li>
                    </ul>
                    <p class="text-gray-700">Team can be any size, and you can add or switch members as needed. Companies using our platform include:</p>
                    <div class="mt-6 flex justify-between gap-6">
                        <img class="w-16 lg:w-24" src="https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg" loading="lazy" alt="airbnb">
                        <img class="w-8 lg:w-16" src="https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg" loading="lazy" alt="bissell">
                        <img class="w-6 lg:w-12" src="https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg" loading="lazy" alt="ge">
                        <img class="w-20 lg:w-28" src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg" loading="lazy" alt="microsoft">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */
}
