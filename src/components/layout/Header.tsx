"use client";
import { useState } from "react";
import Image from "next/image";


export default function Header() {
const [serviceOpen, setServiceOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-zinc-100">

      <div className="w-full mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">

            <img
              src="https://placehold.co/120x50?text=LOGO"
              alt="logo"
              className="h-10 object-contain"
            />

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">

            {/* Services Dropdown */}
            <div className="relative group">

              <button className="flex items-center gap-1 text-[15px] font-medium text-zinc-700 hover:text-green-600 transition">

                Services

                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </button>

              {/* Dropdown */}
              <div className="absolute top-10 left-0 w-56 bg-white rounded-2xl shadow-2xl border border-zinc-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3">

                {[
                  "Plumbing Services",
                  "Electrical Repair",
                  "Home Cleaning",
                  "AC Maintenance",
                ].map((item, index) => (

                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-3 rounded-xl text-sm text-zinc-700 hover:bg-zinc-100 transition"
                  >
                    {item}
                  </a>

                ))}

              </div>
            </div>

            <a
              href="#"
              className="text-[15px] font-medium text-zinc-700 hover:text-green-600 transition"
            >
              How It Works
            </a>

            <a
              href="#"
              className="text-[15px] font-medium text-zinc-700 hover:text-green-600 transition"
            >
              Why Us
            </a>

            <a
              href="#"
              className="text-[15px] font-medium text-zinc-700 hover:text-green-600 transition"
            >
              For Pros
            </a>

          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-5">

            <button className="text-[15px] font-medium text-zinc-700 hover:text-green-600 transition">
              Become a Pro
            </button>

            <button className="text-[15px] font-medium text-zinc-700 hover:text-green-600 transition">
              Log In
            </button>

            <button className="px-6 py-3 rounded-xl bg-green-600 text-white text-sm font-semibold shadow-lg shadow-green-500/20 hover:bg-green-700 transition-all duration-300 hover:shadow-green-500/40">
              Book a Service
            </button>

          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-12 h-12 rounded-xl border border-zinc-200 flex items-center justify-center"
          >

            <svg
              className="w-6 h-6 text-zinc-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>

          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${menuOpen ? "max-h-[500px] pb-6" : "max-h-0"}
          `}
        >

          <div className="flex flex-col gap-3 pt-2">

           <div>

  <button
    onClick={() => setServiceOpen(!serviceOpen)}
    className="w-full flex items-center justify-between px-4 py-4 rounded-2xl bg-zinc-50 text-zinc-700 font-medium hover:bg-zinc-100 transition"
  >

    Services

    <svg
      className={`w-5 h-5 transition ${
        serviceOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>

  </button>

  {/* Service Options */}
  <div
    className={`overflow-hidden transition-all duration-300 ${
      serviceOpen ? "max-h-96 mt-2" : "max-h-0"
    }`}
  >

    <div className="flex flex-col gap-2 pl-3">

      {[
        "Plumbing Services",
        "Electrical Repair",
        "Home Cleaning",
        "AC Maintenance",
      ].map((item, index) => (

        <button
          key={index}
          className="text-left px-4 py-3 rounded-xl bg-zinc-100 text-sm text-zinc-600 hover:bg-zinc-200 transition"
        >
          {item}
        </button>

      ))}

    </div>

  </div>

</div>

            <button className="text-left px-4 py-4 rounded-2xl bg-zinc-50 text-zinc-700 font-medium hover:bg-zinc-100 transition">
              How It Works
            </button>

            <button className="text-left px-4 py-4 rounded-2xl bg-zinc-50 text-zinc-700 font-medium hover:bg-zinc-100 transition">
              Why Us
            </button>

            <button className="text-left px-4 py-4 rounded-2xl bg-zinc-50 text-zinc-700 font-medium hover:bg-zinc-100 transition">
              For Pros
            </button>

            <button className="text-left px-4 py-4 rounded-2xl bg-zinc-50 text-zinc-700 font-medium hover:bg-zinc-100 transition">
              Become a Pro
            </button>

            <button className="text-left px-4 py-4 rounded-2xl bg-zinc-50 text-zinc-700 font-medium hover:bg-zinc-100 transition">
              Log In
            </button>

            <button className="mt-2 w-full py-4 rounded-2xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
              Book a Service
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}