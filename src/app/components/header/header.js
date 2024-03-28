import Image from "next/image";
import Navbar from "./navbar";
import UserButtons from "./user-buttons";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-24 w-full items-center gap-24 bg-slate-900 text-base font-medium">
      <Image
        className="ml-16 h-16 w-14"
        src="/images/logo/logo.jpg"
        alt="Logo"
        width={60}
        height={60}
        priority={true}
      />
      <Navbar />
      <UserButtons />
    </header>
  );
}

export default Header;
