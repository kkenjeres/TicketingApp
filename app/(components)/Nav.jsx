"use client";
import Link from "next/link";
import { GiTicket } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="flex items-center gap-2">
          <Image
            src={session.user.image}
            alt="logo"
            width={100}
            height={100}
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          {session?.user?.name} <br />
        </div>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4 text-white">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaHome className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <GiTicket className="icon" />
        </Link>
      </div>
      <div>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Nav;
