import React from 'react'
import "../Why Choose Us/Style/whychooseus.css"

function WhyChooseUs() {
     return (
          <div className="whychooseus my-20 mx-16">
               <div className='font-primary font-bold text-4xl flex justify-center items-center mb-20'>
               <h1>Why Choose Us</h1>
               </div>
               <div className='tabs flex flex-col  font-secondary text-xs'>
                    <div className='tab flex justify-center gap-36'>
                         <div className='bubble w-[400px] bg-[#ff0000] text-[#fff]' data-aos="fade-down-right" data-aos-duration="1200">
                              <p>
                                   Continuous search for the opportunities beyond the agreed engineering 
                                   and business objectives. 
                              </p>
                         </div>
                         <div className='bubble w-[400px] bg-[#333] text-[#fff]' data-aos="fade-down-left" data-aos-duration="1200">
                              <p>
                                   Creative approaches to the clients&apos; special need in order 
                                   to find unique and tailored engineering solutions. 
                              </p>
                         </div>
                    </div>
                    <div className='tab-mid flex justify-center gap-36'>
                         <div className='bubble w-[400px] bg-[purple] text-[#fff]' data-aos="fade-right" data-aos-duration="1200">
                              <p>
                                   Professional quality of services provided by a highly motivated team. 
                              </p>
                         </div>
                         <div className='bubble w-[400px] bg-[green] text-[#fff]' data-aos="zoom-in" data-aos-duration="2000">
                              <p>
                                   Unique and creative solutions that meet the clients&apos; 
                                   expectations not only by realizing the clients&apos; business 
                                   objectives, but particularly by our strict adherence to the ethical 
                                   principles. 
                              </p>
                         </div>
                         <div className='bubble w-[400px] bg-[brown] text-[#fff]'  data-aos="fade-left" data-aos-duration="1200">
                              <p>
                                   Strong technological background with 24/7 availability.
                              </p>
                         </div>
                    </div>
                    <div className='tab flex justify-center gap-36'>
                         <div className='bubble w-[400px] bg-[#001975] text-[#fff]' data-aos="fade-up-right" data-aos-duration="1200">
                              <p>
                                   Team work based on the implementation of progressive engineering 
                                   disciplines and readiness to stand by our work at any point. 
                              </p>
                         </div>
                         <div className='bubble w-[400px] bg-[orange] text-[#fff]' data-aos="fade-up-left" data-aos-duration="1200">
                              <p>
                                   Courage and readiness to defend work on behalf of client to professional bodies.
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default WhyChooseUs