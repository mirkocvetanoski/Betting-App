"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  "Home",
  "Live Betting",
  "Sports",
  "ESports",
  "Racing",
  "Promotions",
];

function Navbar() {
  const [active, setActive] = useState("Home");

  function handleActive(e) {
    setActive(e.target.innerHTML);
  }

  return (
    <nav id="navbar" className="navbar flex items-center justify-between">
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => {
          return (
            <li
              key={link}
              className={active === link ? "navlink navlink_active" : undefined}
            >
              <Link
                href={
                  link === "Home"
                    ? "/"
                    : `/dashboard/${link.replace(/\s/g, "").toLowerCase()}`
                }
                onClick={(e) => handleActive(e)}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
