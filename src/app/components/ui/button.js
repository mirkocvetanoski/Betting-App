import Link from "next/link";

function Button({ children }) {
  return (
    <Link
      href={`/user/${(children === "Log In" && "login") || (children === "Log Out" && "logout") || (children === "Sign Up" && "signup")}`}
      className={`${children === "Log In" || children === "Log Out" ? "bg-slate-900" : "bg-green-600"} ${children === "Log In" || children === "Log Out" ? "hover:bg-green-600" : "hover:bg-slate-900"} rounded-md border-2 border-green-600 px-12 py-2 font-bold transition-all duration-200`}
    >
      {children}
    </Link>
  );
}

export default Button;
