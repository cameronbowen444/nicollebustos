import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { page: "Home", target: "home" },
  { page: "About", target: "about" },
  { page: "Skills", target: "skills" },
  { page: "Experience", target: "experience" },
];

const Link = ({
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
      className={`
        group relative transition-all duration-300
        ${
          mobile
            ? `
              text-[2rem] font-semibold
              ${
                isSelected
                  ? "text-fuchsia-500"
                  : "text-[#744d70] hover:text-pink-500"
              }
            `
            : `
              text-sm font-semibold tracking-wide
              ${
                isSelected
                  ? "text-fuchsia-500"
                  : "text-[#a06a96] hover:text-pink-500"
              }
            `
        }
      `}
    >
      {page}

      {!mobile && (
        <span
          className={`
            absolute -bottom-2 left-0 h-[2px] rounded-full
            bg-gradient-to-r
            from-pink-500
            via-fuchsia-500
            to-orange-400
            transition-all duration-300
            ${isSelected ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      )}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  // Close mobile menu automatically when switching to desktop.
  useEffect(() => {
    if (isAboveSmallScreens) {
      setIsMenuToggled(false);
    }
  }, [isAboveSmallScreens]);

  // Lock page scrolling while mobile menu is open.
  useEffect(() => {
    if (isMenuToggled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuToggled]);

  // Close with Escape key.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuToggled(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
  className={`
    fixed left-0 top-0 z-50 w-full
    transition-all duration-500
    ${
      isTopOfPage
        ? "bg-transparent py-6"
        : `
          border-b border-pink-400/20
          bg-[#08041f]/90
          py-4
          shadow-[0_12px_40px_rgba(236,72,153,0.12)]
          backdrop-blur-xl
        `
    }
  `}
>
        <div className="mx-auto flex w-5/6 max-w-7xl items-center justify-between">
          {/* LOGO */}
          <AnchorLink
  href="#home"
  onClick={() => setSelectedPage("home")}
  className="group flex items-center"
>
  <img
    src={require("../assets/nicolle-logo.png")}
    alt="Nicolle Bustos"
    className="
      h-12
      w-auto
      object-contain
      transition-transform
      duration-300
      group-hover:scale-105
      md:h-14
    "
  />
</AnchorLink>

          {/* DESKTOP NAV */}
          {isAboveSmallScreens ? (
            <div
              className="
                flex items-center gap-9
                font-opensans
              "
            >
              {navLinks.map((link) => (
                <Link
                  key={link.target}
                  page={link.page}
                  target={link.target}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}

              {/* CONTACT CTA */}
              <AnchorLink
                href="#contact"
                onClick={() => setSelectedPage("contact")}
                className="
                  group
                  flex items-center gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  via-fuchsia-500
                  to-orange-400
                  px-6 py-3
                  text-sm font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(236,72,153,0.24)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_35px_rgba(236,72,153,0.34)]
                "
              >
                Contact
                <FiArrowUpRight
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </AnchorLink>
            </div>
          ) : (
            /* MOBILE MENU BUTTON */
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuToggled}
              onClick={() => setIsMenuToggled(true)}
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                bg-gradient-to-br
                from-pink-500
                via-fuchsia-500
                to-orange-400
                text-xl text-white
                shadow-[0_8px_25px_rgba(236,72,153,0.30)]
                transition-all duration-300
                hover:scale-105
              "
            >
              <FiMenu />
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE MENU
          Intentionally OUTSIDE the navbar.
          This prevents scrolled backdrop-blur / stacking issues.
      */}
      {!isAboveSmallScreens && (
        <div
          className={`
            fixed inset-0 z-[100]
            transition-all duration-500
            ${
              isMenuToggled
                ? "pointer-events-auto visible"
                : "pointer-events-none invisible"
            }
          `}
        >
          {/* OVERLAY */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuToggled(false)}
            className={`
              absolute inset-0
              h-full w-full
              bg-[#321a35]/45
              backdrop-blur-[3px]
              transition-opacity duration-500
              ${isMenuToggled ? "opacity-100" : "opacity-0"}
            `}
          />

          {/* SIDEBAR */}
          <aside
            className={`
              absolute right-0 top-0
              h-full
              w-[86%]
              max-w-[370px]
              overflow-hidden
              bg-gradient-to-br
              from-[#fff7fc]
              via-[#fce8f5]
              to-[#fff1e7]
              shadow-[-25px_0_60px_rgba(69,30,66,0.25)]
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isMenuToggled ? "translate-x-0" : "translate-x-full"}
            `}
          >
            {/* COLOR GLOWS */}
            <div
              className="
                pointer-events-none
                absolute -right-28 -top-24
                h-72 w-72
                rounded-full
                bg-pink-300/50
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute -left-24 top-[38%]
                h-64 w-64
                rounded-full
                bg-fuchsia-300/30
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute -bottom-24 -right-20
                h-72 w-72
                rounded-full
                bg-orange-300/40
                blur-3xl
              "
            />

            {/* TOP ROW */}
            <div
              className="
                relative z-10
                flex items-start justify-between
                px-8 pt-8
              "
            >
              {/* BRAND */}
              <div>
                <h4
                  className="
                    font-playfair
                    text-5xl
                    font-bold
                    bg-gradient-to-r
                    from-pink-500
                    via-fuchsia-500
                    to-orange-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  NB
                </h4>

                <p
                  className="
                    mt-3 max-w-[190px]
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.23em]
                    text-[#a16b98]
                  "
                >
                  Marketing & Brand Strategy
                </p>
              </div>

              {/* CLOSE */}
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuToggled(false)}
                className="
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  rounded-full
                  border border-white/70
                  bg-white/65
                  text-xl
                  text-[#84547e]
                  shadow-md
                  backdrop-blur-md
                  transition-all duration-300
                  hover:rotate-90
                  hover:bg-white
                  hover:text-pink-500
                "
              >
                <AiOutlineClose />
              </button>
            </div>

            {/* LINKS */}
            <div
              className={`
                relative z-10
                mt-16
                flex flex-col
                px-9
                transition-all duration-700
                ${
                  isMenuToggled
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }
              `}
            >
              {navLinks.map((link, index) => (
                <div
                  key={link.target}
                  className="
                    flex items-center justify-between
                    border-b border-pink-200/60
                    py-5
                  "
                >
                  <Link
                    page={link.page}
                    target={link.target}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    closeMenu={() => setIsMenuToggled(false)}
                    mobile
                  />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-[#c38eb7]
                    "
                  >
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* CONTACT BUTTON */}
            <div
              className={`
                relative z-10
                px-9 pt-8
                transition-all
                duration-700
                delay-100
                ${
                  isMenuToggled
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }
              `}
            >
              <AnchorLink
                href="#contact"
                onClick={() => {
                  setSelectedPage("contact");
                  setIsMenuToggled(false);
                }}
                className="
                  group
                  flex w-full
                  items-center justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-pink-500
                  via-fuchsia-500
                  to-orange-400
                  px-6 py-4
                  text-sm font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(236,72,153,0.28)]
                  transition-all duration-300
                  active:scale-[0.98]
                "
              >
                Let&apos;s Connect
                <FiArrowUpRight
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </AnchorLink>
            </div>

            {/* BOTTOM TEXT */}
            <div
              className={`
                absolute
                bottom-8 left-9 right-9
                z-10
                transition-all duration-700
                delay-150
                ${
                  isMenuToggled
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              <div
                className="
                  h-px w-full
                  bg-gradient-to-r
                  from-transparent
                  via-pink-400
                  to-transparent
                "
              />

              <p
                className="
                  mt-5
                  text-center
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#a8729f]
                "
              >
                STRATEGY · CONTENT · CREATIVITY
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
