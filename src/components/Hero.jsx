import React from "react";
import image2 from "../assets/media.png";

export const Hero = () => {
  return (
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center border-teal-500 ">
        <h1 class="title-font sm:text-4xl text-4xl font-extrabold mb-4 text-gray-900">
          Real-time link performance and click data.
        </h1>
        <p class="mb-8 text-2xl text-black leading-relaxed">
          See detailed metrics on your shortened URLs. Track links by how much
          traffic comes from specific regions or device types. Better understand
          your users' journeys when they click on your URLs. Then, optimize your
          campaigns to get your URLs in front of more of the right people.
        </p>
        <div class="flex justify-center">
          <a
            href="/user/register"
            class="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Make it short
          </a>
        </div>
      </div>
      <div class="hidden lg:max-w-lg lg:w-full pt-4 md:w-1/2 w-5/6">
        {/* component  */}
        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          {/* <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800"> */}
          <img src={image2} class="dark:hidden w-[272px] h-[572px]" alt="" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
