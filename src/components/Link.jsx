import React, { useEffect } from "react";
import { useState } from "react";

export const Links = () => {
  const [linkeds, setLinkeds] = useState(null);

  const [error, updateError] = useState();

  const getLinks = async (e) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/links`
      );
      const data = await response.json();
      setLinkeds(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      {/* <div className="bg-dark justify-between">
        <h2 className="text-3xl bold text-black">Links Pages</h2>
        <div className=" border-2 grid grid-rows-1">
          <div className="flex flex-row justify-items-center">
            <h2 className="text-4xl bold px-5 ">Google documment</h2>
            <div className=" justify-end text-xs items-center px-4 px-30">
              <button className="border-2 rounded-lg  text-black justify-end">
                Copy
              </button>
              <button className="border-2 rounded-lg  text-black">edit</button>
              <button className="border-2 rounded-lg  text-black">edit</button>
              <button className="border-2 rounded-lg  text-black">share</button>
            </div>
          </div>
          <h2>dggfhgj</h2>
          <h2>longurl/hkjhoio87fghbhjkll.com</h2>
        </div>
      </div> */}

      <div className="flex flex-col gap-10 text-xl bg-gray-300">
        <h1 className="text-4xl font-bold justify-center  flex flex-col items-center mx-10 py-4 border-b-2">
          Links
        </h1>

        <div className="flex flex-col p-10 relative text-2xl m-10 border-r-inherit  bg-white rounded-lg border-gray-100  border-solid">
          <div className="flex flex-row gap-6">
            <div className="flex flex-1 flex-row gap-6">
              <label></label>
              <div className="flex align-center justify-items-center border-l-gray-300 border-solid w-20 ">
                <img className="border border-r-8 w-12 h-12 "></img>
              </div>

              <div className="flex flex-col flex-1 gap-3">
                <h3 href="google.com" className="">
                  <a>Title</a>
                </h3>
                <div className="flex flex-row gap-10">
                  <div className="flex flex-col flex-1 gap-3">
                    <a
                      className="text-blue-500 font-bold text-2xl break-all overflow-hidden cursor-pointer"
                      href="short url"
                    >
                      bitly/g5STRF
                    </a>
                    <a
                      className="text-black text-2xl cursor-pointer overflow-hidden break-all"
                      href="long url"
                    >
                      https://tesfghjjjhkjkkkkkkkffffffffffffffff/g5STRF
                    </a>
                    <div className="flex flex-row flex-wrap mt-10 text-xl text-black font-medium gap-6">
                      <div className="flex font-medium text-xl text-black items-center">
                        <span className="overflow-hidden break-all text-black text-xl font-medium max-w-3xl">
                          Number of Clicks
                        </span>
                      </div>
                      <div className="flex font-medium text-xl text-black items-center">
                        <span className="overflow-hidden break-all text-black text-xl font-medium max-w-3xl">
                          Date
                        </span>
                      </div>
                      <div className="flex font-medium text-xl text-black items-center">
                        <span className="overflow-hidden break-all text-black text-xl font-medium max-w-3xl">
                          Location
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
