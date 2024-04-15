import React from "react";

export const Hero = () => {
  return (
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center border-green-500 ">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Welcome to simple blog
        </h1>
        <p class="mb-8 leading-relaxed">Here's where I put my thoughts</p>
        <div class="flex justify-center">
          <a
            href=""
            class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Read
          </a>
          <a
            href=""
            class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
          >
            About me
          </a>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://www.svgrepo.com/show/358718/logo-windows.svg"
        />
      </div>
    </div>
  );
};
