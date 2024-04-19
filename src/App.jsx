import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import { DashboardPage } from "./pages/DashboardPage";
import { LinkPage } from "./pages/LinkPage";
import { CreatePage } from "./pages/CreatePage";
import { UserPage } from "./pages/UserPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { LogoutPage } from "./pages/LogoutPage";
import { Pricing } from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/link" element={<LinkPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/login" element={<UserPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/user/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
