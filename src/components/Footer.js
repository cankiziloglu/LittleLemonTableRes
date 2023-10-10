import React from "react";
import { Link } from "react-router-dom";

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
    <footer>
      <div className="foo-nav">
        <ul className={`foo-nav-list ${open ? "open" : ""}`}>
          {menuItems.map((item) => (
            <li className="foo-nav-link" key={item.link}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
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
