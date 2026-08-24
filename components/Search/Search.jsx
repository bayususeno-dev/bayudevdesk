"use client";

import { useState } from "react";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="search">
      <button
  className="search-icon"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Search"
>
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
</button>

      {isOpen && <input type="text" placeholder="Search..." />}
    </div>
  );
}
