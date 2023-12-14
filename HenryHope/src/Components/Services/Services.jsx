import React from 'react'
import "../Services/Style/Services.css"
import IndElect from "../Services/Images/industrial-electrical.jpg"


function Services() {
     return (
          <div>
               <div className='py-12 mx-16'>
                    <div className='flex flex-col items-center'>
                         <h3 className='font-primary font-bold text-3xl'>
                              Our Services
                         </h3>
                         <p className='font-secondary font-semibold text-base text-[#656565]'>
                              Browse through our range of services and let us know how we can come in:
                         </p>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                         <div className='w-[50%]'>
                              <img src={IndElect} alt="services photo" className='rounded-xl'/>
                         </div>
                         <div className='w-[50%]'>
                              <h5>Industrial Electrical Installation Services and Maintenance</h5>
                              <p>  When it comes to working in the industrial sectors, standards and 
                                   mode of work becomes entirely different, efficiency and safety has 
                                   to be at the maximum level and installations and operations have to 
                                   be as perfect as it can be. Industries which carry out manufacturing 
                                   process, bottling, oil and gas, etc., all such industries require 
                                   electrification to carry out their operations and most of these operations 
                                   work with mechanical or electrical calibration; this means that if there 
                                   were to be a glitch in the power supply, the time it takes the system 
                                   running again will commensurately affect the rate of production. 
                                   HHE has always been highly recommended among industries when it comes to perfect 
                                   electrification while paying full attention to the details and complete needs 
                                   of the client and adherence to the ethics governing engineering installations 
                                   and international safety standards and regulations.
                                   Only such commitment and ever continuous perfection towards our rendered services 
                                   can provide a long-term professional relationship with clients based on quality of 
                                   electrical installations, services and maintenance. 
                                   All staff of the organization are constantly trained in safety and are also kept updated 
                                   on the rules and practices of achieving cutting edge results for customer satisfaction.</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Services;