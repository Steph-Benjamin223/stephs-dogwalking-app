import React from "react";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import DogsPage from "./Pages/DogsPage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
