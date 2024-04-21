import React from "react";
import ColorModeToggle from "./Colortoggle";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow mt-5 backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <Link aria-current="page" class="flex items-center" to={"/"}>
              <h1 className="text-teal-500 text-4xl">Kia.ly</h1>
              {/* <img
                class="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt=""
              /> */}
              <p class="sr-only">Website Title</p>
            </Link>
          </div>
          <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/"}
            >
              Benefits
            </Link>
            <a
              aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="/howitworks"
            >
              How it works
            </a>

            <Link
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              to={"/pricing"}
            >
              Why choose us
            </Link>
            <a
              aria-current="page"
              class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="#"
            >
              <ColorModeToggle />
            </a>
          </div>
          <div class="flex items-center justify-end gap-3">
            <Link
              class=" items-center justify-center rounded-xl bg-teal-500 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
              to={"/user/register"}
            >
              Sign up
            </Link>
            <Link
              class="inline-flex items-center justify-center rounded-xl bg-teal-500 px-3 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-150 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to={"/user/login"}
            >
              Login
            </Link>
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

{
  /* <div class="flex w-full p-8 border-b border-gray-300">
					<span class="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
					<div class="flex flex-col flex-grow ml-4">
						<div class="flex">
							<span class="font-semibold">Username</span>
							<span class="ml-1">@username</span>
							<span class="ml-auto text-sm">Just now</span>
						</div>
						<p class="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a class="underline" href="#">#hashtag</a></p>
						<div class="flex mt-2">
							<button class="text-sm font-semibold">Like</button>
							<button class="ml-2 text-sm font-semibold">Reply</button>
							<button class="ml-2 text-sm font-semibold">Share</button>
						</div>
					</div>
				</div> */
}
