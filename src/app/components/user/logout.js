"use client";

import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h3 className="text- text-xl font-bold tracking-wide">
        Do you want to Logout from Betting App?
      </h3>
      <button
        className="rounded-md border-2 border-red-500 px-6 py-2 text-lg font-bold transition-all duration-200 hover:bg-red-500"
        onClick={() => {
          signOut({ callbackUrl: "http://localhost:3000/" });
        }}
      >
        Logout
      </button>
    </div>
  );
}
