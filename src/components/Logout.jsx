import React from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/");
    }
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:4000/logout", {
        method: "GET",
      });
      localStorage.removeItem("token")
      // Perform logout actions such as redirecting to the home page
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error, e.g., show an error message to the user
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};
