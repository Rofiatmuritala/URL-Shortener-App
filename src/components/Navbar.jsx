import React from "react";
import ColorModeToggle from "./Pricing";

export const Navbar = () => {
  return (
    <header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <a aria-current="page" class="flex items-center" href="/">
              <img
                class="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt=""
              />
              <p class="sr-only">Website Title</p>
            </a>
          </div>
          <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a
              aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Benefits
            </a>
            <a
              aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              How it works
            </a>
            <a
              aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Why choose us
            </a>
            <a
              aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              <ColorModeToggle/>
            </a>
            <a
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              Pricing
            </a>
          </div>
          <div class="flex items-center justify-end gap-3">
            <a
              class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              href="/user/register"
            >
              Sign in
            </a>
            <a
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/user/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>

    //     <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg  bg-opacity-30 border-b border-gray-200">
    //       <div className="max-w-5xl mx-auto px-4">
    //         <div className="flex items-center justify-between h-16">
    //           <span className="text-2xl text-gray-900 font-semibold">kia.ly</span>
    //           <div className="flex space-x-4 text-gray-900">
    //             <a href="#">Benefit</a>
    //             <a href="#">About</a>
    //             <a href="#">Why choose us</a>
    //             <a href="#">Contact</a>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //   );
  );
};
