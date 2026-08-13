import Search from "../Search/Search";
import Link from "next/link";
import Hamburger from "../Hamburger/Hamburger";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>

      <div>
        <Hamburger />
      </div>
      <div>
        <Search />
      </div>
    </nav>
  );
}
