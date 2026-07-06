import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import nicolleLogo from "../assets/nicolle-logo.png";

const navLinks = [
  { page: "Home", target: "home" },
  { page: "About", target: "about" },
  { page: "Skills", target: "skills" },
  { page: "Experience", target: "experience" },
];

const drawerTransition = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1],
};

const overlayTransition = {
  duration: 0.18,
  ease: "easeOut",
};

const NavLink = ({
  page,
  target,
  selectedPage,
  setSelectedPage,
  closeMenu,
  mobile = false,
}) => {
  const isSelected = selectedPage === target;

  const handleClick = () => {
    setSelectedPage(target);
    closeMenu?.();
  };

  return (
    <a
      href={`#${target}`}
      onClick={handleClick}
      className={
        mobile
          ? `text-[2rem] font-semibold ${
              isSelected ? "text-fuchsia-500" : "text-[#744d70]"
            }`
          : `group relative text-sm font-semibold tracking-wide transition-colors duration-200 ${
              isSelected
                ? "text-fuchsia-500"
                : "text-[#a06a96] hover:text-pink-500"
            }`
      }
    >
      {page}

      {!mobile && (
        <span
          className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 transition-[width] duration-200 ${
            isSelected ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      )}
    </a>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /* LOCK SCROLL + ESCAPE + CLOSE AT DESKTOP BREAKPOINT */
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleBreakpointChange = (event) => {
      if (event.matches) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, [isMenuOpen]);

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
          <a
            href="#home"
            onClick={() => setSelectedPage("home")}
            className="flex items-center"
            aria-label="Go to home"
          >
            <img
              src={nicolleLogo}
              alt="Nicolle Bustos"
              decoding="async"
              className="h-12 w-auto object-contain md:h-14"
            />
          </a>

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

            <a
              href="#contact"
              onClick={() => setSelectedPage("contact")}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(236,72,153,0.20)] transition-[box-shadow] duration-200 hover:shadow-[0_12px_28px_rgba(236,72,153,0.28)]"
            >
              Contact

              <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* MOBILE OPEN BUTTON */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={openMenu}
            className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 text-xl text-white shadow-[0_6px_18px_rgba(236,72,153,0.20)] md:hidden"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - ALWAYS MOUNTED */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-[100] md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* OVERLAY - FRAMER MOTION OWNS OPACITY */}
        <motion.button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          initial={false}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={overlayTransition}
          className="absolute inset-0 h-full w-full touch-manipulation bg-[#321a35]/60"
        />

        {/* SIDEBAR - FRAMER MOTION OWNS X */}
        <motion.aside
          initial={false}
          animate={{
            x: isMenuOpen ? "0%" : "100%",
          }}
          transition={drawerTransition}
          className="absolute right-0 top-0 h-full w-[86%] max-w-[370px] overflow-hidden bg-gradient-to-br from-[#fff7fc] via-[#fce8f5] to-[#fff1e7] shadow-[-12px_0_32px_rgba(69,30,66,0.18)]"
        >
          {/* SUBTLE STATIC COLOR ACCENTS */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-pink-300/20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-orange-300/15"
          />

          {/* CONTENT */}
          <div className="relative z-10">
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
            <nav className="mt-16 flex flex-col px-9" aria-label="Mobile navigation">
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

                  <span
                    aria-hidden="true"
                    className="text-[10px] font-bold tracking-[0.2em] text-[#c38eb7]"
                  >
                    0{index + 1}
                  </span>
                </div>
              ))}
            </nav>

            {/* CONTACT */}
            <div className="px-9 pt-8">
              <a
                href="#contact"
                onClick={() => {
                  setSelectedPage("contact");
                  closeMenu();
                }}
                className="flex w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-6 py-4 text-sm font-bold text-white shadow-[0_8px_22px_rgba(236,72,153,0.20)]"
              >
                Let&apos;s Connect
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-8 left-9 right-9 z-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

            <p className="mt-5 text-center text-[10px] font-semibold tracking-[0.18em] text-[#a8729f]">
              STRATEGY · CONTENT · CREATIVITY
            </p>
          </div>
        </motion.aside>
      </div>
    </>
  );
};

export default Navbar;