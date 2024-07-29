import React from "react";
import Dashboard from "../components/Dashboard";
import { Home } from "../components/Home";
import { CreateNew } from "../components/Create";

export const LandingPage = () => {
  return (
    <Dashboard>
      <CreateNew />
    </Dashboard>
  );
};
