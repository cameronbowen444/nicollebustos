import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-pink-300/15
        bg-gradient-to-r
        from-white/[0.07]
        via-pink-100/[0.05]
        to-fuchsia-100/[0.06]
        py-8
        backdrop-blur-md
      "
    >
      {/* SOFT GLOWS */}
      <div className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-pink-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-orange-400/10 blur-[100px]" />

      <div className="relative z-10 mx-auto w-[90%] max-w-6xl">
        {/* TOP ROW */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          {/* NAME */}
          <div className="text-center md:text-left">
            <p className="font-playfair text-xl font-semibold text-[#d3a5c9]">
              Nicolle Bustos
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#a97d9f]">
              Marketing · Brand · Creative Strategy
            </p>
          </div>

          {/* SOCIALS */}
          <SocialMediaIcons />
        </div>

        {/* BOTTOM LINE */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="text-[10px] tracking-wide text-[#95718f]">
            © 2026 Nicolle Bustos. All rights reserved.
          </p>

          <p className="text-[10px] tracking-wide text-[#95718f]">
            Designed with strategy, creativity, and intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;