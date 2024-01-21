import Link from "next/link";
import { GiTicket } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaHome className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <GiTicket className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">jake@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
