import React from "react";

export const CreateNew = () => {
  return (
    <div>
      <form>
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-10"
        >
          Destination
        </label>
        <input
          type="text"
          id="text"
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="https://example.com/dr5GH8"
          onChange={(e) => e.target.value}
        />

        <p
          id="helper-text-explanation"
          class="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          You can create unlimited links this month.{" "}
        </p>

        <label
          for="text"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-10"
        >
          Title (optional)
        </label>
        <input
          type="text"
          id="text"
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          onChange={(e) => e.target.value}
        />

        <div class="jusify-between  ">
          <label class="block  text-sm text-gray-900 dark:text-white mt-10">
            QR code (optional)
          </label>
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ">
            Generate a QR code to share anywhere people can see it.
          </span>
        </div>
      </form>
      <div class="border rounded-lg pt-2 mt-10">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};
