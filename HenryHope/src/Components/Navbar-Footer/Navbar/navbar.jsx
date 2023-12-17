import "../Navbar/Style/navbar.css"
import Logo from "../../../assets/images/logo.png"


function Navbar() {
  return (
    <header className="">
      <div className="mx-16 nav flex justify-between mb-3">
        <div className="logo">
          <a href="/">
          <img src={Logo} alt="company logo" className="w-20 h-20" />
          </a>
        </div>
        <div className="navlinks">
          <ul className="flex justify-between gap-10 pt-6 font-secondary">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/coming-soon">Projects</a></li>
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