"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger">
      <button
        className="hamburger-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? "x" : "☰"}
      </button>

      {isOpen && (
        <div className="hamburger-menu">
          <div className="hamburger-header">
            <span>Navigation</span>
          </div>

          {/* MAIN NAVIGATION */}
          <nav className="hamburger-navigation">

            <Link
              href="/web-development-guide"
              className="hamburger-link"
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>

            <Link
              href="/notes"
              className="hamburger-link"
              onClick={() => setIsOpen(false)}
            >
              Notes
            </Link>

            <Link
              href="/tools"
              className="hamburger-link"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </Link>

            <Link
              href="/my-development-journey"
              className="hamburger-link"
              onClick={() => setIsOpen(false)}
            >
              Journey
            </Link>
          </nav>

          {/* SECONDARY NAVIGATION */}
          <div className="hamburger-divider" />

          <nav className="hamburger-secondary-navigation">
            <Link
              href="/about"
              className="hamburger-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hamburger-link"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}