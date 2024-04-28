import React from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteSingleLink({ linkId }) {
  const onDeleteHandler = async (event) => {
    event.preventDefault(); // Prevent page reload

    try {
      await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/links/${linkId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.href = "/dashboard/links";
      //   navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MdDelete
      onClick={onDeleteHandler}
      className="text-red-600 text-2xl cursor-pointer"
    />
  );
}
