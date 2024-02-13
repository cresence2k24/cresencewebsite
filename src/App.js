import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import EventPage from "./pages/eventPage";
import Contact from "./pages/contact";
import Notfound from "./pages/NotFound";

const App = () => {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preload");
  useEffect(() => {
    preloader.style.display = "none";
    setLoading(false);
  }, []);
  return (
    !loading && (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/workshops/:id" element={<EventPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  );
};

export default App;
