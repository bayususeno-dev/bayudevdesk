"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger">
      <button className="hamburger-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <div className="hamburger-menu">
          <ul>
            <li>
              <Link href="/about" className="hamburger-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hamburger-link">
                Contact Me
                </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
