import "../Hero/Style/hero.css"
import HomeHero from "../../../assets/images/home-hero-image.png"

function Hero() {
  return (
     <>
          <div className="home-hero" >
               <div className="home-hero-container flex justify-around mx-16 items-center">
                    <div className="home-hero-text flex flex-col gap-8" 
                              data-aos="fade-down" data-aos-duration="1500">
                              <h4 className="font-primary font-extrabold text-xl text-[#001975]" >
                              Henry Hope Engineering</h4>
                              <h1 className="font-secondary font-black text-4xl text-[black]" data-aos="fade-right" data-aos-duration="1500" >QUALITY... 
                              <br /> INTEGRITY... SAFETY...</h1>
                         <div className="home-hero-link" data-aos="fade-up" data-aos-duration="3000">
                              <a href="/coming-soon" className="font-secondary">Request For Quote</a>
                         </div>
                    </div>
                    <div className="home-hero-image">
                         <img src={HomeHero} alt="tools image" data-aos="fade-up-left" data-aos-duration="1500"/>
                    </div>
               </div>
          </div>
     </>
  )
}

export default Hero;