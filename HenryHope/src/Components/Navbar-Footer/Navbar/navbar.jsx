import "../Navbar/Style/navbar.css"
import Logo from "../../../assets/images/logo.png"
import { FaBars } from "react-icons/fa6";


function Navbar() {
  return (
    <header className="">
      <div className="mx-16 nav flex justify-between mb-3">
        <div className="logo">
          <img src={Logo} alt="company logo" className="w-20 h-20" />
        </div>
        <div className="navlinks">
          <ul className="flex justify-between gap-10 pt-6 font-secondary">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/about-us">About Us</a></li>
            </ul>
        </div>
      </div>
      <hr className="line" />
    </header>
  )
}

export default Navbar;