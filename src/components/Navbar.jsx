import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const pages = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/posts",
      name: "See all",
    },
    {
      route: "/about",
      name: "About",
    },
  ];

  const [activeLink, setActiveLink] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <ul className="flex justify-between bg-white text-black p-4">
        {pages.map((el, index) => (
          <li
            key={index}
            className={activeLink == index ? "border-b-4 border-b-sky-500" : ""}
          >
            <NavLink onClick={() => handleNavLinkClick(index)} to={el.route}>
              {el.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
