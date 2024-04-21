import { QRCodeSVG } from "qrcode.react";
import React, { useEffect } from "react";
import { useState } from "react";
import { TbClipboardCopy } from "react-icons/tb";

export const Links = () => {
  const [linkeds, setLinkeds] = useState(null);

  const getLinks = async (e) => {
    try {
      const response = await fetch(
        `http://localhost:4000/links`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
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
          <div
            className="flex flex-col p-10 text-2xl  bg-white rounded-md border-gray-100 border-solid justify-center items-center font-bold h-full

          "
          >
            Links
          </div>
        ) : (
          <div className="flex flex-col md:w-full ">
            {linkeds.map((linked) => (
              <div key={linked._id} className="flex flex-row gap-10">
                <div className="flex flex-1 flex-row gap-6">
                  <label></label>
                  <div className="flex align-center justify-items-center  w-10  md:w-20">
                    <QRCodeSVG className="" value={linked.shortLink} />
                  </div>

                  <div className="flex flex-col flex-1 gap-3 ">
                    <h3
                      href="google.com"
                      className="text-xs md:text-2xl font-bold"
                    >
                      <a>{linked.name}</a>
                    </h3>
                    <div className="flex flex-row gap-10">
                      <div className="flex flex-col flex-1 gap-3">
                        <a
                          className="text-blue-500 font-bold text-xs cursor-pointer md:text-2xl"
                          href={linked.shortLink}
                          target="_blank"
                        >
                          {linked.shortLink}{" "}
                          <TbClipboardCopy className="inline-block text-black m-2 pb-2 cursor-pointer" />
                        </a>
                        <a
                          className="text-black text-xs bold cursor-pointer overflow-hidden break-all md:text-2xl"
                          href="long url"
                        >
                          {linked.actualLink}
                        </a>
                        <div className="flex flex-row flex-wrap mt-2 mb-14 text-xl text-black font-medium gap-6">
                          {/* <div className="flex font-medium  rounded-lg  bg-slate-200  items-center">
                            <span className="overflow-hidden  text-gray-600 text-xs font-medium md:text-xl  ">
                              clicks={linked.clicks}
                            </span>
                          </div>                          */}
                          <div className="flex flex-1 font-medium   items-center">
                            <span className="overflow-hidden break-all text-black text-xs bg-gray-300 rounded-lg p-2 font-medium max-w-3xl md:text-xl">
                              {linked.updatedAt}
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
