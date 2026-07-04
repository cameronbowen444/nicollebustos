import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({
  selectedPage,
  setSelectedPage,
}) => {
  const links = [
    {
      page: "home",
      href: "#home",
      label: "Home",
    },
    {
      page: "about",
      href: "#about",
      label: "About",
    },
    {
      page: "skills",
      href: "#skills",
      label: "Skills",
    },
    {
      page: "experience",
      href: "#experience",
      label: "Experience",
    },
    {
      page: "contact",
      href: "#contact",
      label: "Contact",
    },
  ];

  return (
    <div
      className="
        fixed
        right-7
        top-1/2
        z-40
        flex
        -translate-y-1/2
        flex-col
        gap-5
      "
    >
      {links.map((link) => {
        const isSelected =
          selectedPage === link.page;

        return (
          <AnchorLink
            key={link.page}
            href={link.href}
            aria-label={link.label}
            onClick={() =>
              setSelectedPage(link.page)
            }
            className="
              group
              relative
              flex
              h-5
              w-5
              items-center
              justify-center
            "
          >
            {/* OUTER RING */}
            <span
              className={`
                absolute
                h-5
                w-5
                rounded-full
                border
                transition-all
                duration-300
                ${
                  isSelected
                    ? `
                      scale-100
                      border-pink-400/80
                      opacity-100
                    `
                    : `
                      scale-75
                      border-transparent
                      opacity-0
                      group-hover:scale-100
                      group-hover:border-pink-400/50
                      group-hover:opacity-100
                    `
                }
              `}
            />

            {/* INNER DOT */}
            <span
              className={`
                relative
                h-2.5
                w-2.5
                rounded-full
                transition-all
                duration-300
                ${
                  isSelected
                    ? `
                      scale-110
                      bg-gradient-to-br
                      from-pink-500
                      via-fuchsia-500
                      to-orange-400
                      shadow-[0_0_14px_rgba(236,72,153,0.55)]
                    `
                    : `
                      bg-[#a678a0]
                      opacity-60
                      group-hover:scale-110
                      group-hover:bg-pink-400
                      group-hover:opacity-100
                    `
                }
              `}
            />

            {/* TOOLTIP */}
            <span
              className="
                pointer-events-none
                absolute
                right-8
                whitespace-nowrap
                rounded-full
                border
                border-pink-300/30
                bg-[#160d24]/85
                px-3
                py-1.5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-pink-200
                opacity-0
                shadow-[0_8px_25px_rgba(0,0,0,0.20)]
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            >
              {link.label}
            </span>
          </AnchorLink>
        );
      })}
    </div>
  );
};

export default DotGroup;