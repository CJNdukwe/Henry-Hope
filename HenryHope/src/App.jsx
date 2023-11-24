import { useEffect } from "react";
import "./App.css";
import AosInitializer from "./assets/aosInitializer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/homepage";




function App() {
  useEffect(() => {
    AosInitializer();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-us" element={<Contact-us />} />
        <Route path="/about-us" element={<About-Us />} /> */}
      </Routes>
    </> 
  )
}

export default App;
