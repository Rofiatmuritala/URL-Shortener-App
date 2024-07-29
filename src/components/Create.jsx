import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export const CreateNew = () => {
  const [name, setName] = useState(null);
  const [actualLink, setActualLink] = useState(null);
  const [shortLink, setShortLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const newShortenedUrl = {
      name: name,
      shortLink: shortLink,
      actualLink: actualLink,
    };

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/links`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newShortenedUrl),
        }
      );

      const data = await response.json();

      setShortLink(data.link.shortLink);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <CardBody>
        {shortLink === null ? (
          <>
            {isLoading === false && (
              <>
                {" "}
                <CardHeader>
                  <Heading size="lg">Create Short Link</Heading>
                </CardHeader>
                <form onSubmit={onSubmitHandler}>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    id="text"
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="https://example.com/dr5GH8"
                    onChange={(e) => setActualLink(e.target.value)}
                  />

                  <p
                    id="helper-text-explanation"
                    class="mt-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    You can create unlimited links this month.{" "}
                  </p>

                  <label
                    for="text"
                    class="block mb-2 text-sm font-medium text-gray-500 dark:text-white mt-10"
                  >
                    Title (optional)
                  </label>
                  <input
                    type="text"
                    id="text"
                    aria-describedby="helper-text-explanation"
                    class=" mb-4 bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                  />

                  <div class="jusify-between  ">
                    {/* <label class="block  text-sm text-gray-500 dark:text-white mt-10">
                      QR code (optional)
                    </label>
                    <input
                      type="checkbox"
                      value=""
                      class="sr-only peer"
                      // onChange={(e) => (e.target.value)}
                    /> */}
                    <div class=" peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300 ">
                      QR code autoenerated to share anywhere people can see it.
                    </span>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-teal-500 mt-5 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}

            {isLoading === true && <Loading />}
          </>
        ) : (
          <div>
            <div>
              <div className="bg-gray-500 p-1 border rounded-lg inline-block ">
                Shortened URL
              </div>
            </div>
            <a className="text-2xl text-blue-900" href={shortLink}>
              {shortLink}
            </a>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
