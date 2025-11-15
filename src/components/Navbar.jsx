import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_icon from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { useEffect, useRef, useState } from "react";
import { logout } from "../firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navref = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!navref.current) return;

      if (window.scrollY >= 76) {
        navref.current.classList.add("nav-dark");
      } else {
        navref.current.classList.remove("nav-dark");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={navref}
      className=" w-full py-5 px-[4%] md:px-[6%] navbar fixed text-sm text-[#e5e5e5] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)10%,transparent)] flex justify-between z-10"
    >
      <div className="flex items-center gap-12">
        <h2 className="text-red-600 font-bold font-barlow text-2xl">
          StreamBase
        </h2>
        <ul className="hidden md:flex items-baseline-last text-sm lg:text-base list-none gap-2.5 lg:gap-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Language</li>
        </ul>
      </div>
      <div className="flex items-center gap-2.5 sm:gap-5">
        <img src={search_icon} alt="search-icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className="icons" />
        <div
          className="flex items-center gap-2.5 relative cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          ref={dropdownRef}
        >
          <img src={profile_icon} alt="bell-icon" className="rounded-sm w-9" />
          <img src={caret_icon} alt="caret-icon" />
          {isOpen && (
            <div className="absolute right-0 top-[100%] bg-[#191919] w-max rounded-xs py-4.5 px-5.5 underline">
              <p
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-sm cursor-pointer"
              >
                Sign Out of StreamBase
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
