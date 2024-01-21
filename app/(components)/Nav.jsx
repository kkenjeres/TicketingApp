import Link from "next/link";
 
const Nav = () => {
  return (
    <nav>
      <div>
        <Link href='/'>Home</Link>
      </div>
      <div>
        <p className="text-default-text">jake@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
