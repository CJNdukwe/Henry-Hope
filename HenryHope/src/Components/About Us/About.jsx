import React from "react";
import "../About Us/Style/About.css";
import AboutHero from "../About Us/Image/about-hero.jpg";
import Conoil from "../About Us/Logos/conoil.png";
import Total from "../About Us/Image/total.png";
import FirstBank from "../About Us/Image/first.png";
import UnionBank from "../About Us/Logos/union.png";
import Nlng from "../About Us/Logos/lng.png";
import NigBre from "../About Us/Image/nb.png";
import Mobil from "../About Us/Logos/mobil.png";
import Futo from "../About Us/Logos/futo.png";
import CEO from "../About Us/Image/ceo.jpg"

function About() {
  return (
    <div>
      <div className="contact-container py-12">
        <div>
          <h3 className="font-primary font-bold text-3xl flex justify-center items-center pb-3">
            About Us
          </h3>
          <p className="font-secondary font-medium text-sm flex justify-center items-center">
            Integrity is about doing the right thing, even when no one is
            watching...
          </p>
          <p className="font-secondary font-medium text-sm flex justify-center items-center pb-10">
            At Henry Hope Engineering Nigeria Limited, we uphold quality,
            integrity and safety!
          </p>
        </div>
        <div>
          <img
            src={AboutHero}
            alt="hero image"
            className="w-[100%] h-[400px]"
          />
        </div>
        <div>
          <div className="font-primary font-bold text-xl flex justify-between items-center py-6 px-16">
            <h2>Our Mission</h2>
            <h2>Our Vision</h2>
          </div>
          <div className="font-secondary font-normal text-lg flex justify-between items-center text-justify pb-12 px-16">
            <div className="mission-vision w-[550px] h-[300px] text-[#fff] bg-orange-500">
              <h5 className="p-4">
                To provide the best services in electrical and mechanical
                engineering to ensure that the expectations of our clients are
                met through quality, integrity and safe services with the joint
                effort from our management and team of engineers who have been
                trained both internally and externally to be the best at what
                they do with due respect to the entire environment for both
                client and staff.
              </h5>
            </div>
            <div className="mission-vision w-[550px] h-[300px] text-[#fff] bg-blue-600">
              <h5 className="p-4">
                To be the leading organization in the field of
                electro-mechanical and aviation technology service industry
                through uncompromising stand to our principles and policies in
                the maintenance and installation of industrial equipment and
                serve as a standard in the field of engineering.
              </h5>
            </div>
          </div>
        </div>
        <div className="clients">
          <h3 className="font-primary font-bold text-xl flex justify-center items-center pb-16">
            Some of our clients:
          </h3>
          <div className="flex flex-col gap-12">
            <div className="flex justify-around items-center">
              <img
                src={Total}
                alt="total energies"
                className="w-[150px] h-[100px]"
              />
              <img
                src={FirstBank}
                alt="first bank"
                className="w-[150px] h-[100px]"
              />
              <img src={Conoil} alt="conoil" className="w-[150px] h-[100px]" />
              <img
                src={NigBre}
                alt="nigeria breweries"
                className="w-[150px] h-[100px]"
              />
            </div>
            <div className="flex justify-around items-center">
              <img src={Nlng} alt="nlng" className="w-[150px] h-[100px]" />
              <img src={Futo} alt="futo" className="w-[150px] h-[100px]" />
              <img
                src={UnionBank}
                alt="union bank"
                className="w-[150px] h-[100px]"
              />
              <img
                src={Mobil}
                alt="mobil oil"
                className="w-[150px] h-[100px]"
              />
            </div>
          </div>
        </div>
        <div className="founder bg-[#aab2d1] border-4 mt-10">
          <div className="founder-inner">
            <h5 className="font-primary font-bold text-2xl text-justify">
              &quot;HHE&apos;s approach to engineering is to create a standard of
              engineering installation, services and maintenance which abides by
              all the international standards of engineering and safety
              practices, making it affordable to everyone. Our team of engineers
              is constantly updated in the field of engineering to always follow
              the trends in modern techniques and in the use of the best of
              materials to ensure long lasting service with guarantee. Taking
              into account the condition of the locality in which we strive in,
              coupled with the innovative trends in engineering and the working
              experience of over 35years in both national and international
              partnership with clients, HHE&apos;s capabilities are effectively
              enhanced to manage perceptions of key audiences. Our complete
              adherence to stringent ethical standards as well as the use of
              creative engineering tools makes HHE capable of optimally
              satisfying the engineering needs of its clients.&quot;
            </h5>
            <br />
            <div className="founder-frame flex gap-3 items-center">
              <div className="ceo-image">
                <img src={CEO} alt="ceo image" />
              </div>
              <div className="ceo-name">
                <h6 className="font-normal text-lg">Engr. Ernest Ndukwe</h6>
                <h6 className="font-medium text-xs">Founder and CEO</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
