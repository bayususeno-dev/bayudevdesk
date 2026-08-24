import Link from "next/link";
import Search from "../Search/Search";
import Hamburger from "../Hamburger/Hamburger";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">
          <Link className="logo-link" href="/">
            BayuDevDesk
          </Link>
        </div>

        <div className="navbar-navigation">
          <Link href="/web-development-guide">Learn</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/my-development-journey">Journey</Link>
        </div>

        <div className="navbar-actions">
          <Search />
          <Hamburger />
        </div>
      </div>
    </nav>
  );
}