import React from "react";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <Nav />
      <div className="contact-menu">
        <h3>Contact Us</h3>
        <ul>
          <li>Phone: 555-555-5555</li>
          <li>Email: info@littlelemontable.com</li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </div>
      <div className="social-links-menu">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
