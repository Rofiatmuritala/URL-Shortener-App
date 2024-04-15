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
      await fetch("/logout", {
        method: "GET",
        credentials: "same-origin", // or 'include' for cross-origin requests with cookies
      });
      // Perform logout actions such as redirecting to the home page
      navigate("/dashboard");
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error, e.g., show an error message to the user
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};
