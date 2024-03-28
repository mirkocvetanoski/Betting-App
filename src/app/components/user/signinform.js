"use client";

import { addEntry } from "@/app/lib/form-actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";

function SignUpForm() {
  const [state, formAction] = useFormState(addEntry, null);
  const [userExistsError, setUserExistsError] = useState(null);

  const router = useRouter();

  function handleSetUserExistsError(message) {
    !userExistsError && setUserExistsError(message);
  }

  if (state?.formData) {
    try {
      // Check if user exist in database
      const resUserExists = fetch("/api/userExists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: state?.formData.username,
          email: state?.formData.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // If user exists
          if (data?.user?._id) {
            console.log("User Exists!");
            // Execute twice on first try ??
            handleSetUserExistsError(data?.message);
            return;
          } else {
            // If user doesn't exists, create new user
            const res = fetch("/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                username: state?.formData.username,
                email: state?.formData.email,
                password: state?.formData.password,
                confirmPassword: state?.formData.confirmPassword,
              }),
            }).then((res) =>
              res.json().then((data) => {
                if (res.ok) {
                  router.push("/");
                  console.log("User Successfully Signed Up.");
                } else {
                  console.log("User Registation Failed.");
                }
              }),
            );
          }
        });
    } catch (error) {
      console.log("Error During Registration", error);
    }
  }

  return (
    <form action={formAction} className="h-[715px]" id="sigup-form">
      <h3>SignUp Here</h3>

      <label htmlFor="username">Username</label>
      <input
        className={`${state?.error?.username?._errors[0] && "border-2 border-rose-500"}`}
        type="text"
        placeholder="Username"
        id="username"
        name="username"
      />
      <span className="text-xs text-rose-500">
        {state?.error?.username?._errors[0]}
      </span>

      <label htmlFor="email">Email</label>
      <input
        className={`${state?.error?.email?._errors[0] && "border-2 border-rose-500"}`}
        placeholder="Email"
        type="text"
        id="email"
        name="email"
      />
      <span className="text-xs text-rose-500">
        {state?.error?.email?._errors[0]}
      </span>

      <label htmlFor="password">Password</label>
      <input
        className={`${state?.error?.password?._errors[0] && "border-2 border-rose-500"}`}
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      />
      <span className="text-xs text-rose-500">
        {state?.error?.password?._errors[0]}
      </span>

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        className={`${state?.error?.confirmPassword?._errors[0] && "border-2 border-rose-500"}`}
        type="password"
        placeholder="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
      />

      <span className="mb-5 text-xs text-rose-500">
        {state?.error?.confirmPassword?._errors[0]}
      </span>

      <span
        className={`${!userExistsError && "hidden"} mb-5 text-xs text-rose-500`}
      >
        {userExistsError}
      </span>

      <button className="mt-2 w-full rounded-md border-2 border-green-600 bg-slate-900 px-12 py-2 font-bold transition-all duration-200 hover:bg-green-600">
        Sign Up
      </button>

      <div className="mt-4 flex h-6 w-full items-center justify-center p-2 text-sm font-thin">
        <Link href="/user/login" className="">
          Already Have an Account? Log In!
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;
