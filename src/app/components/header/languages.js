"use client";

import Image from "next/image";

import React, { useState } from "react";

function Languages() {
  const [flag, setFlag] = useState("gb");

  function handleSelect(event) {
    setFlag(event.target.value);
  }

  return (
    <div className="flex items-center gap-1">
      <Image
        src={`/images/flags/${flag}.jpg`}
        alt="Flag"
        width={20}
        height={20}
      />
      <select
        onChange={handleSelect}
        name="Language"
        className="cursor-pointer rounded-sm bg-slate-900 p-0.5 outline-none focus:outline-none"
      >
        <option value="gb">EN</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
}

export default Languages;
