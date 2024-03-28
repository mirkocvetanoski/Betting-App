"use client";

import Button from "../ui/button";
import Languages from "./languages";
import { useSession } from "next-auth/react";

function UserButtons() {
  const { status, data } = useSession();

  return (
    <div className="ml-auto mr-5 flex items-center gap-6">
      <Languages />
      {status === "authenticated" ? (
        <>
          <p className="border-spacing-2text-pretty rounded-md border border-dashed border-green-600 px-4 py-0 text-sm text-green-600">
            Welcome,{<br></br>} {data?.user?.username}
          </p>
          <Button>Log Out</Button>
        </>
      ) : (
        <>
          <Button>Log In</Button>
          <Button>Sign Up</Button>
        </>
      )}
    </div>
  );
}

export default UserButtons;
