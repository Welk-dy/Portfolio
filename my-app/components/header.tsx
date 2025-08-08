"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50 || hovering) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hovering]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        bg-white shadow-sm
      `}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Photo*/}
        <div className="font-bold text-lg cursor-pointer">
        <a href="#about" className="flex items-center space-x-2">
            <Image
            src="/logo.webp"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full object-cover border-white shadow-md"
            priority
            />
            <a
            className="font-bold text-md"
            >Fernaldy Saputra</a>
        </a>
        </div>

        {/* Sub Menu */}
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li><a href="projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="about" className="hover:text-gray-400">About</a></li>
          <li><a href="experience" className="hover:text-gray-400">Experience</a></li>
        </ul>
      </nav>
    </header>
  );
}