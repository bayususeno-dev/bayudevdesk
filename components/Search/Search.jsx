"use client";

import { useState } from "react";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="search">
      <button className="search-icon" onClick={() => setIsOpen(!isOpen)}>
        🔍
      </button>

      {isOpen && <input type="text" placeholder="Search..." />}
    </div>
  );
}
