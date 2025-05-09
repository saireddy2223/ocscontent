import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import neridio from "../assets/neridio.png";
import gepLogo from "../assets/logo_gep.png";
import { ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logos */}
        <div className="flex items-center space-x-4">
          <img src={neridio} alt="Neridio Logo" className="h-14 object-contain" />
          <img src={gepLogo} alt="GEP Logo" className="h-12 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-lg font-large text-gray-700">
          <Link
            to="/"
            className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#59A033] after:scale-x-0 after:transition after:duration-300 hover:after:scale-x-100 hover:text-[#59A033]"
          >
            Home
          </Link>
          <Link
            to="/privacy-policy"
            className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#59A033] after:scale-x-0 after:transition after:duration-300 hover:after:scale-x-100 hover:text-[#59A033]"
          >
            Privacy Policy
          </Link>

          <a
            href="https://neridio.com/"
            target="_blank"
            className="inline-flex items-center space-x-1 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#59A033] after:scale-x-0 after:transition after:duration-300 hover:after:scale-x-100 hover:text-[#59A033]"
          >
            <span className="inline-flex items-center">
              Know more
              <ExternalLink className="ml-1" size={16} />
            </span>
          </a>


          <Link
            to="/signin"
            className="border border-[#59A033] text-[#59A033] px-5 py-2 rounded-full font-semibold hover:bg-[#59A033] hover:text-white transition"
          >
            Sign In
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden flex ">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 p-6 flex flex-col space-y-6 lg:hidden transition-all duration-300">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end mb-2 focus:outline-none"
          >
            <X size={28} />
          </button>
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#59A033] transition">Home</Link>
          <Link to="/privacy-policy" onClick={() => setIsOpen(false)} className="hover:text-[#59A033] transition">Privacy Policy</Link>
          <a
            href="https://neridio.com/"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#59A033] transition">
            Know more
          </a>
          <Link
            to="/signin"
            onClick={() => setIsOpen(false)}
            className="text-center border border-[#59A033] text-[#59A033] px-5 py-2 rounded-full font-semibold hover:bg-[#59A033] hover:text-white transition"
          >
            Sign In
          </Link>
        </div>
      )}

    </nav>
  );
}