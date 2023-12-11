import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="flex justify-between bg-white text-black p-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">See all</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </>
  );
}
