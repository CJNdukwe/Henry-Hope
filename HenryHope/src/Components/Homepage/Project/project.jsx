import React from 'react'
import "../Project/Style/project.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import PumpPanel from "../Project/Images/image1.png"
import GenSet from "../Project/Images/image3.png"
import TotalLights from "../Project/Images/image2.png"
import PumpWiring from "../Project/Images/image4.jpg"


function Project() {
     return (
          <div className="project">
               <div className="project-container mx-16">
                    <div className='font-primary font-bold text-4xl flex justify-center items-center mb-20'>
                         <h1>Our Projects</h1>
                    </div>
                    <div className='flex'>
                         <div>
                              <img src={PumpPanel} alt="pump panel" className='w-56 h-56'/>
                              <h6>Pump Panel Installation</h6>
                              <p>Location: RITE Foods Factory, Ososa, Ijebu-Ogun, Nigeria</p>
                         </div>
                         <div>
                              <img src={GenSet} alt="generator" className='w-56 h-56'/>
                              <h6>Main Panel Installation</h6>
                              <p>Location: RITE Foods Factory, Ososa, Ijebu-Ogun, Nigeria</p>
                         </div>
                         <div>
                              <img src={TotalLights} alt="total lights" className='w-56 h-56'/>
                              <h6>Led Light Installation</h6>
                              <p>Location: Asaba, Delta State, Nigeria</p>
                         </div>
                         <div>
                              <img src={PumpWiring} alt="pump installation" className='w-56 h-56'/>
                              <h6>Electric Pump Installation</h6>
                              <p>Location: RITE Foods Factory, Ososa, Ijebu-Ogun, Nigeria</p>
                         </div>
                    </div>
                    <div className="link-to-services flex justify-end items-center font-secondary">
                         <a href="/services">View all projects</a>
                         <FaLongArrowAltRight className="pt-2 text-[#ff0000]" />
                    </div>
               </div>
          </div>
     )
}

export default Project;