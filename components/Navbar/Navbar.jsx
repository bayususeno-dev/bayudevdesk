import Search from "../Search/Search";
import Link from "next/link";
import Hamburger from "../Hamburger/Hamburger";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="logo-link" href="/">🏠</Link>
      </div>

      <div className="navbar-actions">
        <Search />
        <Hamburger />
      </div>
    </nav>
  );
}
