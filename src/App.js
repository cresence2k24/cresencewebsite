import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import EventPage from "./pages/eventPage";
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
            <Route
              path="/workshops/:id"
              element={<EventPage Workshop={true} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    )
  );
};

export default App;
