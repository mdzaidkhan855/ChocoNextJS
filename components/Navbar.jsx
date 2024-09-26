"use client";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <img
          src="/images/logo1.png" // Path relative to the 'public' folder
          alt="My Image"
        />
      </div>
      <div>
        <ul className="nav-right">
          <li className="font-thin">Home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
