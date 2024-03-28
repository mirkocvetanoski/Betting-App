"use client";

import { getEntry } from "@/app/lib/form-actions";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginForm() {
  const [state, formAction] = useFormState(getEntry, null);
  const [errorInvalidCredential, setErrorInvalidCredentials] = useState("");

  const router = useRouter();

  console.log(state?.formData);

  const handleSubmit = async (e) => {
    try {
      const res = await signIn("credentials", {
        username: state?.formData.username,
        password: state?.formData.password,
        redirect: false,
      });

      if (res.error) {
        setErrorInvalidCredentials("Invalid Credentials!");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (state?.formData) {
    handleSubmit();
  }

  return (
    <form action={formAction} className="h-[498px]">
      <h3>Login Here</h3>

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

      <label htmlFor="password">Password</label>
      <input
        className={`${state?.error?.password?._errors[0] && "border-2 border-rose-500"}`}
        type="password"
        placeholder="Password"
        id="password"
        name="password"
      />
      <span className="mb-5 text-xs text-rose-500">
        {state?.error?.password?._errors[0]}
      </span>

      <span
        className={`${!errorInvalidCredential && "hidden"} mb-5 text-xs text-rose-500`}
      >
        {errorInvalidCredential}
      </span>

      <button className="mt-2 w-full rounded-md border-2 border-green-600 bg-slate-900 px-12 py-2 font-bold transition-all duration-200 hover:bg-green-600">
        Log In
      </button>

      <div className="mt-4 flex h-6 w-full items-center justify-between p-2 text-sm font-thin">
        <Link href="/user/signup" className="">
          Sign Up
        </Link>
        <Link href="#">Forgot Password?</Link>
      </div>
    </form>
  );
}

export default LoginForm;
