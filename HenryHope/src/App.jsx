import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/homepage";




function App() {

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
