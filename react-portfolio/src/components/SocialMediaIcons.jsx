import React from "react";
import {
  BsLinkedin,
} from "react-icons/bs";

const SocialMediaIcons = () => {
  const socialLinks = [
    {
      icon: <BsLinkedin />,
      href: "https://www.linkedin.com/in/nicollebowen",
      label: "LinkedIn",
    },
    
  ];

  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="
            group
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-pink-300/40
            bg-white/10
            text-lg
            text-[#c486b7]
            shadow-[0_8px_24px_rgba(190,70,150,0.08)]
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:border-pink-400/70
            hover:bg-gradient-to-br
            hover:from-pink-500
            hover:via-fuchsia-500
            hover:to-orange-400
            hover:text-white
            hover:shadow-[0_12px_28px_rgba(236,72,153,0.28)]
          "
        >
          <span
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            {social.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;