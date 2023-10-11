import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../assets/logo.png";

const Footer = () => {
  
  // Define an array of menu items
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Menu", link: "/menu" },
    { label: "Reservations", link: "/reservations" },
    { label: "Order Online", link: "/order" },
    { label: "Login", link: "/login" },
  ];

  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <img className="footer-logo" src={footerlogo} alt="Little Lemon Logo" />
        <div className="solid">________________________________</div>
        <div className="foo-nav">
          <ul className={`foo-nav-list ${open ? "open" : ""}`}>
            {menuItems.map((item) => (
              <li className="foo-nav-link" key={item.link}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="solid">________________________________</div>
        <div className="foo-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Phone: 555-555-5555</li>
            <li>Email: info@littlelemontable.com</li>
            <li>Address: 123 Main St, Anytown USA</li>
          </ul>
        </div>
        <div className="solid">________________________________</div>
        <div className="foo-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href=""><i className="fa-brands fa-facebook-f fa-xl"></i></a>
            </li>
            <li>
              <a href=""><i className="fa-brands fa-x-twitter fa-xl"></i></a>
            </li>
            <li>
              <a href=""><i className="fa-brands fa-instagram fa-xl"></i></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
