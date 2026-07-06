import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import nicolleLogo from "../assets/nicolle-logo.png";

const navLinks = [
  { page: "Home", target: "home" },
  { page: "About", target: "about" },
  { page: "Skills", target: "skills" },
  { page: "Experience", target: "experience" },
];

const NavLink = ({
  page,
  target,
  selectedPage,
  setSelectedPage,
  closeMenu,
  mobile = false,
}) => {
  const isSelected = selectedPage === target;

  return (
    <AnchorLink
      href={`#${target}`}
      onClick={() => {
        setSelectedPage(target);
        closeMenu?.();
      }}
      className={`group relative ${
        mobile
          ? `text-[2rem] font-semibold ${
              isSelected
                ? "text-fuchsia-500"
                : "text-[#744d70]"
            }`
          : `text-sm font-semibold tracking-wide transition-colors duration-200 ${
              isSelected
                ? "text-fuchsia-500"
                : "text-[#a06a96] hover:text-pink-500"
            }`
      }`}
    >
      {page}

      {!mobile && (
        <span
          className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 transition-[width] duration-200 ${
            isSelected ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      )}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-[padding,background-color,border-color] duration-200 ${
          isTopOfPage
            ? "bg-transparent py-6"
            : "border-b border-pink-400/20 bg-[#08041f]/95 py-4"
        }`}
      >
        <div className="mx-auto flex w-5/6 max-w-7xl items-center justify-between">
          {/* LOGO */}
          <AnchorLink
            href="#home"
            onClick={() => setSelectedPage("home")}
            className="flex items-center"
          >
            <img
              src={nicolleLogo}
              alt="Nicolle Bustos"
              decoding="async"
              className="h-12 w-auto object-contain md:h-14"
            />
          </AnchorLink>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-9 font-opensans md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.target}
                page={link.page}
                target={link.target}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}

            <AnchorLink
              href="#contact"
              onClick={() => setSelectedPage("contact")}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(236,72,153,0.24)] transition-transform duration-200 hover:-translate-y-1"
            >
              Contact
              <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </AnchorLink>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 text-xl text-white md:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - ALWAYS MOUNTED */}
      <div
        className={`fixed inset-0 z-[100] md:hidden ${
          isMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        {/* OVERLAY */}
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 h-full w-full touch-manipulation bg-[#321a35]/60 transition-opacity duration-150 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* SIDEBAR */}
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-[370px] transform-gpu bg-gradient-to-br from-[#fff7fc] via-[#fce8f5] to-[#fff1e7] transition-transform duration-150 ease-out will-change-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            contain: "paint",
          }}
        >
          {/* TOP ROW */}
          <div className="flex items-start justify-between px-8 pt-8">
            <div>
              <h4 className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 bg-clip-text font-playfair text-5xl font-bold text-transparent">
                NB
              </h4>

              <p className="mt-3 max-w-[190px] text-[10px] font-semibold uppercase tracking-[0.23em] text-[#a16b98]">
                Marketing & Brand Strategy
              </p>
            </div>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/70 bg-white/90 text-xl text-[#84547e]"
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* LINKS */}
          <div className="mt-16 flex flex-col px-9">
            {navLinks.map((link, index) => (
              <div
                key={link.target}
                className="flex items-center justify-between border-b border-pink-200/60 py-5"
              >
                <NavLink
                  page={link.page}
                  target={link.target}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  closeMenu={closeMenu}
                  mobile
                />

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#c38eb7]">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>

          {/* CONTACT */}
          <div className="px-9 pt-8">
            <AnchorLink
              href="#contact"
              onClick={() => {
                setSelectedPage("contact");
                closeMenu();
              }}
              className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-6 py-4 text-sm font-bold text-white"
            >
              Let&apos;s Connect
              <FiArrowUpRight />
            </AnchorLink>
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-8 left-9 right-9">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

            <p className="mt-5 text-center text-[10px] font-semibold tracking-[0.18em] text-[#a8729f]">
              STRATEGY · CONTENT · CREATIVITY
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;