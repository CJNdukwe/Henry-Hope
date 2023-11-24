import "../Hero/Style/hero.css"

function Hero() {
  return (
     <>
          <div className="home-hero my-1" 
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1500">
               <div className="home-hero-text flex flex-col gap-8 justify-start pt-28 mx-4" 
                    data-aos="fade-down" data-aos-duration="1500">
                    <h4 className="font-primary font-extrabold text-xl text-[#001975]" >
                    Henry Hope Engineering</h4>
                    <h1 className="font-secondary font-black text-4xl text-[orange]" >QUALITY... 
                    <br /> INTEGRITY... <br /> SAFETY...</h1>
               <div className="home-hero-link" data-aos="fade-up" data-aos-duration="1500">
                    <a href="/coming-soon" className="font-secondary">Request For Quote</a>
               </div>
               </div>
               
          </div>
     </>
  )
}

export default Hero;