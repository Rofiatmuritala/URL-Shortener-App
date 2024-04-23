import { useParams } from "react-router-dom";
import Dashboard from "../../../components/Dashboard";
import SingleLink from "../../../components/links/SingleLink";
import { useEffect, useState } from "react";

export default function SingleLinkPage() {
  const params = useParams();

  const [singleLink, setSingleLink] = useState(null);

  const token = localStorage.getItem("token");

  const getSingleLink = async (e) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/links/${params.shortCode}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      setSingleLink(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleLink();
  }, [params.shortCode]);

  return (
    <Dashboard>
      {singleLink !== null ? <SingleLink singleLink={singleLink} /> : <></>}
    </Dashboard>
  );
}
