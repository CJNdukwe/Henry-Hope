import { useEffect } from "react";
import "./App.css";
import AosInitializer from "./assets/aosInitializer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/homepage";
import ServicesPage from "./Pages/Services/services";
import ProjectPage from "./Pages/Projects/projects";
import ContactUs from "./Pages/Contact Us/contact";
import AboutUs from "./Pages/About Us/about";
import ComingSoon from "./Pages/Coming-Soon/soon";





function App() {
  useEffect(() => {
    AosInitializer();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </> 
  )
}

export default App;
