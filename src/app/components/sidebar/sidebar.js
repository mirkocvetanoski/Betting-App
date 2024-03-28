"use client";

import Link from "next/link";
import { useState } from "react";

const popularSports = [
  "⚽ Soccer",
  "🎾 Tennis",
  "🏀 Basketball",
  "🏏 Cricket",
  "🏏 💻 eCricket",
  "🏒 Ice Hockey",
  "🏀 💻 NBA 2K",
  "🏐 Volleyball",
  "⚽ 💻 FIFA: Volta",
  "🤾 Handball",
  "🏓 Table Tennis",
];

const otherSports = [
  "🤼 Kabaddi",
  "🤼 💻 eFighting",
  "🏉 Aussie Rules",
  "🏉 Rugby",
  "🥊 Boxing",
  "🥊👊 MMA",
  "⚽ Futsal",
  "🏑 Bandy",
  "🤽 Waterpolo",
  "🏑 Floorball",
  "🚴 Cycling",
  "🎯 Darts",
  "🤼 Wrestling",
];

function Sidebar() {
  const [active, setActive] = useState("Home");

  function handleActive(e) {
    setActive(e.target.innerHTML);
  }

  return (
    <ul
      id="sidebar"
      className="flex w-2/12 flex-col gap-1 overflow-y-scroll bg-slate-900 p-3 px-5 py-8 font-light"
    >
      <li>
        <Link className="ml-2 inline-block w-full" href="#">
          Home
        </Link>
      </li>
      <li>
        <Link className="ml-2 inline-block w-full" href="#">
          Marketplace
        </Link>
      </li>
      <li>
        <Link className="ml-2 inline-block w-full" href="#">
          In-Play
        </Link>
      </li>

      <hr className="border-b-1 my-3 border-slate-500" />

      <h3 className="mb-2 text-xl font-bold">Popular</h3>

      {popularSports.map((link) => {
        return (
          <li
            key={link}
            className={active === link ? "sidelink sidelink_active" : undefined}
          >
            <Link
              className="ml-3 inline-block w-full"
              href={`/sport/${link.replace(/\s/g, "").toLowerCase()}`}
              onClick={(e) => handleActive(e)}
            >
              {link}
            </Link>
          </li>
        );
      })}

      <hr className="border-b-1 my-3 border-slate-500" />

      <h3 className="mb-2 text-xl font-bold">Other Sports</h3>

      {otherSports.map((link) => {
        return (
          <li
            key={link}
            className={active === link ? "sidelink sidelink_active" : undefined}
          >
            <Link
              className="ml-3 inline-block w-full"
              href={`/sport/${link.replace(/\s/g, "").toLowerCase()}`}
              onClick={(e) => handleActive(e)}
            >
              {link}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Sidebar;
