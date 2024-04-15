import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className=" bg-white items-center mx-auto p-10 ">
        <div className="flex flex-cols-2 md:flex-cols-1 gap-48 my-10 w-full mx-12 p-10 items-center bg-white border-gray-500 rounded-lg">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Make it short
              </h1>
            </a>

            <Link
              to={"/user/links"}
              class=" mt-7 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go to links
            </Link>
          </div>
          {/* next */}
          <div class="max-w-sm p-6 ml-10 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Make it Scannable
              </h1>
            </a>

            <Link
              to={"/user/links"}
              class=" mt-7 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go to QR codes
            </Link>
          </div>
        </div>

        <div class="p-4 text-center bg-white border m-10 border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Work fast from anywhere
          </h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            How many people can even remember a long web address, especially if
            it has tons of characters and symbols? A short URL can make your
            link more memorable. Not only does it allow people to easily recall
            and share your link with others, it can also dramatically improve
            traffic to your content. On a more practical side, a short URL is
            also easier to incorporate into your collateral – whether you’re
            looking to engage with your customers offline or online. Bitly is
            the best URL shortener for everyone, from influencers to small
            brands to large enterprises, who are looking for a simple way to
            create, track and manage their links.
          </p>
        </div>
      </div>
    </>
  );
};
