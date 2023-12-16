import React from "react";
import "../Contact Us/Style/Contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-container py-12 mx-16">
        <div>
          <h3 className="font-primary font-bold text-3xl flex justify-center items-center pb-10">
            Contact Us
          </h3>
        </div>
        <form action="">
          <div className="contact-info font-primary font-semibold text-sm flex justify-between items-center pb-12">
            <p>First Name *</p>
            <input type="text" />
          </div>
          <div className="contact-info font-primary font-semibold text-sm flex justify-between items-center pb-12">
            <p>Last Name *</p>
            <input type="text" />
          </div>
          <div className="contact-info font-primary font-semibold text-sm flex justify-between items-center pb-12">
            <p>Email *</p>
            <input type="email" />
          </div>
          <div className="contact-info flex justify-between items-center pb-12">
            <p className="font-primary font-semibold text-sm">Your Message *</p>
            <textarea rows="4" cols="20" wrap="hard"></textarea>
          </div>
          <div className="submit-button font-primary font-semibold text-sm flex justify-between items-center pb-12">
            <p>Please submit your message and we will get back to you.</p>
            <button
              type="submit"
              className="font-semibold text-sm flex justify-center items-center"
            >
              <p>Send</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
