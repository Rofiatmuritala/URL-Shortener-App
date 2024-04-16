import React, { useEffect } from "react";
import { useState } from "react";

export const Links = () => {
  const [linkeds, setLinkeds] = useState(null);

  const getLinks = async (e) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/links`
      );
      const data = await response.json();
      setLinkeds(data.links);
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

      {/* <div className="flex flex-col gap-10 text-xl bg-gray-300"> */}
      {linkeds !== null &&
        (linkeds.length === 0 ? (
          <div className="flex justify-center items-center font-bold h-96">
            Links
          </div>
        ) : (
          <div className="flex flex-col p-10 relative text-2xl m-10 border-r-inherit  bg-white rounded-lg border-gray-100  border-solid">
            {linkeds.map((linked) => (
              <div key={linked._id} className="flex flex-row gap-6">
                <div className="flex flex-1 flex-row gap-6">
                  <label></label>
                  <div className="flex align-center justify-items-center border-l-gray-300 border-solid w-20 ">
                    <img className="border border-r-8 w-12 h-12 "></img>
                  </div>

                  <div className="flex flex-col flex-1 gap-3">
                    <h3 href="google.com" className="">
                      <a>{linked.name}</a>
                    </h3>
                    <div className="flex flex-row gap-10">
                      <div className="flex flex-col flex-1 gap-3">
                        <a
                          className="text-blue-500 font-bold text-2xl break-all overflow-hidden cursor-pointer"
                          href="short url"
                        >
                          {linked.shortLink}
                        </a>
                        <a
                          className="text-black text-2xl cursor-pointer overflow-hidden break-all"
                          href="long url"
                        >
                          {linked.actualLink}
                        </a>
                        <div className="flex flex-row flex-wrap mt-2 mb-14 text-xl text-black font-medium gap-6">
                          <div className="flex font-medium text-xl rounded-lg  bg-slate-200 text-gray-400 items-center">
                            <span className="overflow-hidden break-all rounded-lg p-1 text-gray-600 text-xl font-medium max-w-3xl">
                              clicks={linked.clicks}
                            </span>
                          </div>
                          <div className="flex font-medium text-xl text-black items-center">
                            <span className="overflow-hidden break-all text-black text-xl font-medium max-w-3xl">
                              Date:{linked.updatedAt}
                            </span>
                          </div>
                          {/* <div className="flex font-medium text-xl text-black items-center">
                            <span className="overflow-hidden break-all text-black text-xl font-medium max-w-3xl">
                              Location
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      {/* </div> */}
    </>
  );
};
