import React from "react";
import { BsLinkedin } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      <a
        href="https://www.linkedin.com/in/nicollebowen"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-pink-300/40 bg-white/10 text-lg text-[#c486b7] shadow-[0_8px_24px_rgba(190,70,150,0.08)] transition-[transform,border-color,background-color,color,box-shadow] duration-300 hover:-translate-y-1 hover:scale-105 hover:border-pink-400/70 hover:bg-pink-500 hover:text-white hover:shadow-[0_12px_28px_rgba(236,72,153,0.28)]"
      >
        <BsLinkedin className="transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;