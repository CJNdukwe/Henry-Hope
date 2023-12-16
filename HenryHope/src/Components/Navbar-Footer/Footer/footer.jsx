import "../Footer/Style/footer.css"
import { FaSquarePhone, FaEnvelopeCircleCheck, FaLocationDot, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import Logo from "../../../assets/images/logo.png"


function Footer() {
return (
     <footer>
          <div className="footer">
               <div className="footer-top font-secondary font-bold text-sm flex justify-around items-center bg-[#999] h-24 w-full">
                    <div>
                         <a href="tel:+2348033225912" className="flex gap-2 items-center">
                              <FaSquarePhone className="footer-top-icons text-[green] w-8 h-8"/>
                              <p>+2348033225912</p>
                         </a>
                    </div>
                    <div>
                         <a href="mailto:henryhopeengnig@yahoo.com" className="flex gap-2 items-center">
                              <FaEnvelopeCircleCheck className="footer-top-icons text-[purple] w-8 h-8"/>
                              <p>henryhopeengnig@yahoo.com</p>
                         </a>
                    </div>
                    <div>
                         <a href="https://maps.app.goo.gl/TWWBpp8bKgEvzdS17?g_st=iw" className="flex gap-2 items-center">
                              <FaLocationDot className="footer-top-icons text-[red] w-8 h-8"/>
                              <p>145, Old Ojo Rd, Kuje Amuwo, Amuwo Odofin, Lagos.</p>
                         </a>
                    </div>
               </div>
               <div className="footer-mid flex flex-col gap-3 justify-center items-center h-60">
                    <a href="/">
                    <img src={Logo} alt="company logo" className="w-20 h-20" /></a>
                    <h4 className="font-primary font-bold text-2xl">Henry Hope Engineering</h4>
                    <h4 className="font-primary font-bold text-2xl">Nigeria Limited</h4>
                    <div className="socialicons flex gap-5">
                         <a href="/coming-soon"><FaLinkedin className="w-8 h-8 text-[#4157a8]"/></a>
                         <a href="/coming-soon"><FaSquareInstagram className="w-8 h-8 text-[#e252e2]"/></a>
                    </div>
               </div>
               <div className="font-secondary font-bold text-xs flex justify-center items-center bg-[#ccc] h-20">
                    <span>
                         <p>
                              &copy; 2024, Henry Hope Engineering Nigeria Limited, All Rights Reserved
                         </p>
                    </span>
               </div>
          </div>
     </footer>
)
}

export default Footer;