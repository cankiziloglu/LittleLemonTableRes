// Render the navigation menu using array map
import React from "react";

// Define an array of menu items
const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Menu", link: "/menu" },
  { label: "Reservations", link: "/reservations" },
  { label: "Order Online", link: "/order" },
  { label: "Login", link: "/login" },
];

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li className="nav-link" key={item.link}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
