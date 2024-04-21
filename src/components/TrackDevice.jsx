import React from "react";
import browser from "../assets/media.png";

export const TrackDevice = () => {
  return (
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center border-green-500 ">
        <h1 class="title-font sm:text-4xl text-5xl mb-4 font-extrabold text-teal-500">
          All the data you need, nothing you don't.{" "}
        </h1>
        <h1 class="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
          Get popular metrics on your shortened links like location, devices,
          frequent times, referrer and more. Monitor only the data you need in
          the Kia.ly™ dashboard. Track links individually or by groups to see
          how your shortened links perform over time.
        </h1>
        <div className="justify-center">
          <p>Android</p>
          <p>Operating System</p>
          <p>Browser(Google, Mozilla, Firefox, Edge, Safari)</p>
        </div>

        <div class="flex justify-center">
          <a
            href="/user/login"
            class="inline-flex text-white bg-teal-500 border-0 mt-4 py-2 px-6 focus:outline-none hover:bg-teal-800 rounded text-lg"
          >
            Track it now
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
          <img src={browser} class="dark:hidden w-[272px] h-[572px]" alt="" />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
