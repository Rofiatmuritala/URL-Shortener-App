import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import { DashboardPage } from "./pages/DashboardPage";
import { LinksPage } from "./pages/dashboard/links/LinksPage";
import { CreatePage } from "./pages/CreatePage";
import { UserPage } from "./pages/UserPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { LogoutPage } from "./pages/LogoutPage";
import { Pricing } from "./components/Pricing";
import Contact from "./components/Contact";
import { Howitworks } from "./components/Howitworks";
import SingleLinkPage from "./pages/dashboard/links/SingleLinkPage";
import EditSingleLink from "./components/links/EditSingleLink";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/howitworks" element={<Howitworks />} />
          <Route path="/dashboard/home" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/login" element={<UserPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/user/register" element={<RegisterPage />} />
          <Route path="/dashboard/links" element={<LinksPage />} />
          <Route
            path="/dashboard/links/:shortCode"
            element={<SingleLinkPage />}
          />
          <Route
            path="/dashboard/links/:shortCode/edit"
            element={<EditSingleLink />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
