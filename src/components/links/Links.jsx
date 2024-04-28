import { Card, CardBody } from "@chakra-ui/react";
import { QRCodeSVG } from "qrcode.react";
import React, { useEffect } from "react";
import { useState } from "react";
import { TbClipboardCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import DeleteSingleLink from "./DeleteSingleLink";
import Loading from "../Loading";

export const Links = () => {
  const [links, setLinks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  const getLinks = async (e) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/links`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setLinks(data.links);
      setIsLoading(false);
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
      {links !== null &&
        (links.length === 0 ? (
          <div
            className="flex flex-col p-10 text-2xl  bg-white rounded-md border-gray-100 border-solid justify-center items-center font-bold h-full

          "
          >
            Links
          </div>
        ) : (
          <div className="flex flex-col md:w-full ">
            {links.map((link) => (
              <Card className="my-5">
                <CardBody>
                  <div key={link._id} className="flex flex-row gap-10">
                    <div className="flex flex-1 flex-row gap-6">
                      <div className="flex align-center justify-items-center  w-10  md:w-20">
                        <QRCodeSVG className="" value={link.shortLink} />
                      </div>

                      <div className="flex flex-col flex-1 gap-3 ">
                        <Link
                          to={`/dashboard/links/${link.shortCode}`}
                          className="text-xs md:text-lg"
                        >
                          {link.name}
                        </Link>

                        <div className="flex flex-row gap-10">
                          <div className="flex flex-col flex-1 gap-3">
                            <a
                              className="text-blue-500 font-bold text-xs md:text-lg cursor-pointer"
                              href={link.shortLink}
                              target="_blank"
                            >
                              {link.shortLink}{" "}
                            </a>
                            {/* <a
                              className="text-black text-xs bold cursor-pointer overflow-hidden break-all md:text-2xl"
                              href="long url"
                            >
                              {link.actualLink}
                            </a> */}
                            <div className="flex flex-row flex-wrap mt-2 text-xl text-black font-medium gap-6">
                              {/* <div className="flex font-medium  rounded-lg  bg-slate-200  items-center">
                            <span className="overflow-hidden  text-gray-600 text-xs font-medium md:text-xl  ">
                              clicks={link.clicks}
                            </span>
                          </div>                          */}
                              <div className="flex flex-1 font-medium   items-center">
                                <span className="overflow-hidden break-all text-black text-xs bg-gray-300 rounded-lg p-2 font-medium max-w-3xl md:text-xl">
                                  {link.updatedAt.split("T")[0]}
                                </span>
                                <span className="overflow-hidden break-all text-black ml-4  bg-gray-300 rounded-lg p-2 font-medium max-w-3xl md:text-xl ">
                                  {" "}
                                  Copy
                                  {/* <TbClipboardCopy className="inline-block text-black m-2 pb-2 cursor-pointer" /> */}
                                </span>
                                <span className="overflow-hidden break-all text-white ml-4  bg-gray-300 rounded-lg p-2 font-medium max-w-3xl md:text-xl ">
                                  <DeleteSingleLink linkId={link.shortCode} />
                                </span>
                              </div>
                              {/* <div className="flex font-medium items-center">
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        ))}
      {isLoading === true && <Loading />}
      {/* </div> */}
    </>
  );
};
