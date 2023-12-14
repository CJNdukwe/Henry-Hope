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
                    <div className='card-base flex pb-4'>
                         <div className='card-container flex gap-6'>
                              <div data-aos="fade-right" data-aos-duration="3000">
                                   <img src={PumpPanel} alt="pump panel" className='w-56 h-56 rounded-lg pb-2'/>
                                   <h6 className='font-primary font-bold text-base pb-2'>Pump Panel Installation</h6>
                                   <p className='font-secondary font-medium text-xs text-[#656565] w-[250px]'>Location: RITE Foods Factory, Ososa, Ijebu-Ogun, Nigeria</p>
                              </div>
                              <div data-aos="fade-right" data-aos-duration="2000">
                                   <img src={GenSet} alt="generator" className='w-56 h-56 rounded-lg pb-2'/>
                                   <h6 className='font-primary font-bold text-base pb-2'>Main Panel Installation</h6>
                                   <p className='font-secondary font-medium text-xs text-[#656565] w-[250px]'>Location: RITE Foods Factory, Ososa, Ijebu-Ogun, Nigeria</p>
                              </div>
                         </div>
                         <div className='card-container flex gap-6'>
                              <div data-aos="fade-right" data-aos-duration="1500">
                                   <img src={TotalLights} alt="total lights" className='w-56 h-56 rounded-lg pb-2'/>
                                   <h6 className='font-primary font-bold text-base pb-2'>Led Light Installation</h6>
                                   <p className='font-secondary font-medium text-xs text-[#656565] w-[250px]'>Location: Asaba, Delta State, Nigeria</p>
                              </div>
                              <div data-aos="fade-right">
                                   <img src={PumpWiring} alt="pump installation" className='w-56 h-56 rounded-lg pb-2'/>
                                   <h6 className='font-primary font-bold text-base pb-2'>Electric Pump Installation</h6>
                                   <p className='font-secondary font-medium text-xs text-[#656565] w-[250px]'>Location: RITE Foods Factory, Ososa, Ijebu-Ogun, Nigeria</p>
                              </div>
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