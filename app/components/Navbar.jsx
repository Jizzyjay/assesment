"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Our Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-24">
          {/* Logo */}
          <Image src={Logo} alt="Logo" width={70} height={60} />

          {/* Desktop Navigation (visible from lg and up) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-black text-base font-normal px-4 py-3 hover:rounded-full hover:bg-[#F9F4F1] transition-colors ${
                  index === 0 ? "border-b-2 border-[#572514] rounded-md" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons (visible from lg and up) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button className="bg-transparent border border-[#572514] text-[#572514] cursor-pointer hover:bg-[#F9F4F1] px-6 py-3 rounded-full text-base font-bold">
              Become a Vendor
            </Button>
            <Button className="bg-[#572514] text-white  px-6 py-3 rounded-full cursor-pointer text-base font-bold">
              Plan your Event
            </Button>
          </div>

          {/* Mobile / Tablet Hamburger (visible until lg) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#572514] p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1 bg-gray-50 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black block px-3 py-2 hover:bg-[#F9F4F1] rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <button className="text-[#572514] border border-[#572514] hover:bg-[#F9F4F1] cursor-pointer block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                  Become a Vendor
                </button>
                <button className="bg-[#572514] cursor-pointer text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
