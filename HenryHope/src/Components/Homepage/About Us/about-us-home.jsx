import "../About Us/Style/about-us-home.css"
import { FaIndustry, FaPeopleGroup } from "react-icons/fa6";
import { GiPowerGenerator, GiAutoRepair, GiCommercialAirplane, GiElectric } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb"; 
import { TfiRulerPencil } from "react-icons/tfi";
import { FaLongArrowAltRight } from "react-icons/fa";
import DescImg from "../../../assets/images/home-about-us-image2.jpg"

function AboutUsHome() {
  return (
    <div className="about-us-home">
      <div className="auh-container flex justify-between items-center">
      <div className="auh-container-content flex flex-col justify-center items-center w-[50%]" data-aos="zoom-in-right" data-aos-duration="2000">
        <div>
        <h3 className="font-primary font-extrabold text-2xl text-[#000]" >
          ABOUT US</h3>
        </div>
        <div>
          <p className="font-secondary font-normal text-base text-[#333333] mb-5">Henry Hope Engineering 
            provides comprehensive engineering services for <br /> rural, urban and 
            industrial electrification (commercial and residential).</p>
        </div>
        <div className="link-to-about-us mb-12">
          <a href="/about-us" className="font-secondary">Learn more about us</a>
        </div>
        <div className="home-about-us-image flex justify-center items-center">
          <img src={DescImg} alt="engineer photo" className="w-[80%] rounded-2xl" />
        </div>
      </div>
      <div className="auh-container-content flex flex-col gap-10 justify-start items-start font-secondary p-10 bg-[#aab2d1] w-[50%]">
        <div className="home-service-tag flex gap-5 justify-center items-center" data-aos="fade-left" data-aos-duration="500">
          <FaIndustry className="text-2xl text-[#666]" />
          <h4>Industrial Electrical Installation Services and Maintenance</h4>
        </div>
        <div className="home-service-tag flex gap-5 justify-center items-center" data-aos="fade-left" data-aos-duration="800">
          <GiPowerGenerator className="text-2xl text-[green]" />
          <h4>Industrial plants and generators </h4>
        </div>
        <div className="home-service-tag flex gap-5 justify-center items-center" data-aos="fade-left" data-aos-duration="1100">
          <FaPeopleGroup className="text-2xl text-[brown]" />
          <h4>Engineering consultants</h4>
        </div>
        <div className="home-service-tag flex gap-5 justify-center items-center" data-aos="fade-left" data-aos-duration="1400">
          <TbTruckDelivery className="text-2xl text-[#000]" />
          <h4>Supply and Installation of engineering materials</h4>
        </div>
        <div className="home-service-tag flex gap-5 justify-center items-center" data-aos="fade-left" data-aos-duration="1700">
          <TfiRulerPencil className="text-2xl text-[brown]" />
          <h4>Engineering designs and drawings</h4>
        </div>
        <div className="home-service-tag flex gap-5 justify-center items-center" data-aos="fade-left" data-aos-duration="2000">
          <GiCommercialAirplane className="text-2xl text-[blue]" />
          <h4>Aviation engineers</h4>
        </div>
        <div className="home-service-tag flex gap-5 justify-center items-center" data-aos="fade-left" data-aos-duration="2500">
          <GiElectric className="text-2xl text-[#ff0000]" />
          <h4>Rural and urban residential and commercial electrification</h4>
        </div>
        <div className="home-service-tag flex gap-5 justify-center items-center" data-aos="fade-left" data-aos-duration="3000">
          <GiAutoRepair className="text-2xl text-[orange]" />
          <h4>Electrical maintenance</h4>
        </div>
        <div className="link-to-services flex">
          <a href="/services">See more details</a>
          <FaLongArrowAltRight className="pt-2 text-[#ff0000]" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutUsHome;