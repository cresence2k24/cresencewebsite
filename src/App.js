import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import EventPage from "./pages/eventPage";
import Notfound from "./pages/NotFound";
import TechLandingpage from "./pages/TechEventLandingPage";
import NonTechLandingPage from "./pages/NonTechLandingPage";
import WorkshopLandingPage from "./pages/WorkshopLandingPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preload");
  useEffect(() => {
    preloader.style.display = "none";
    setLoading(false);
  }, []);
  return (
    !loading && (
      <div className="select-none">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/techevents" element={<TechLandingpage />} />
            <Route path="/nontechevents" element={<NonTechLandingPage />} />
            <Route path="/workshops" element={<WorkshopLandingPage />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/workshops/:id" element={<EventPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  );
};

export default App;
