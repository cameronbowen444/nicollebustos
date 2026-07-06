import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiArrowUpRight } from "react-icons/fi";

import SocialMediaIcons from "../components/SocialMediaIcons";
import nicolleImage from "../assets/nicolle.jpeg";

const Landing = ({ setSelectedPage }) => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-28">
      {/* BACKGROUND GLOWS */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[12rem] top-[8%] h-[24rem] w-[24rem] rounded-full bg-pink-500/10 blur-[85px] md:-left-[18rem] md:h-[38rem] md:w-[38rem] md:blur-[130px]" />
        <div className="absolute left-[15%] top-[18%] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/[0.07] blur-[90px] md:left-[20%] md:top-[15%] md:h-[34rem] md:w-[34rem] md:blur-[140px]" />
        <div className="absolute -right-[14rem] top-[10%] h-[26rem] w-[26rem] rounded-full bg-purple-500/10 blur-[90px] md:-right-[18rem] md:top-[5%] md:h-[40rem] md:w-[40rem] md:blur-[140px]" />
        <div className="absolute bottom-[-14rem] left-[20%] h-[24rem] w-[24rem] rounded-full bg-orange-400/[0.07] blur-[90px] md:bottom-[-20rem] md:left-[35%] md:h-[36rem] md:w-[36rem] md:blur-[140px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto grid w-[90%] max-w-6xl items-center gap-12 pb-16 pt-8 lg:min-h-[calc(100vh-110px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pb-10 lg:pt-0">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* BADGE */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 rounded-full border border-pink-300/40 bg-white/10 px-4 py-2 shadow-[0_8px_30px_rgba(236,72,153,0.08)]">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c57bb6] sm:text-[10px]">
                  Marketing · Brand · Creative Strategy
                </p>
              </div>
            </div>

            {/* NAME */}
            <h1 className="text-center font-playfair text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#b477aa] sm:text-6xl lg:text-left lg:text-[4.7rem]">
              Nicolle
              <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 bg-clip-text italic text-transparent">
                Bustos
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-7 max-w-lg text-center text-[15px] leading-7 text-[#b583aa] lg:mx-0 lg:text-left lg:text-base">
              Marketing professional and CSUN graduate focused on creating
              meaningful brands, engaging content, and strategies that connect
              with real people.
            </p>

            {/* AMA CREDENTIAL */}
            <div className="mx-auto mt-5 flex max-w-lg items-center justify-center gap-3 lg:mx-0 lg:justify-start">
              <div className="h-[2px] w-8 shrink-0 bg-gradient-to-r from-pink-500 to-orange-400" />

              <p className="text-center text-xs font-medium leading-5 text-[#c587b8] lg:text-left lg:text-sm">
                Former President of the American Marketing Association
              </p>
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <AnchorLink
              href="#experience"
              onClick={() => setSelectedPage("experience")}
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 px-6 py-3.5 text-xs font-bold text-white shadow-[0_10px_28px_rgba(236,72,153,0.24)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(236,72,153,0.32)]"
            >
              View My Work

              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </AnchorLink>

            <AnchorLink
              href="#contact"
              onClick={() => setSelectedPage("contact")}
              className="flex items-center justify-center rounded-full border border-pink-300/70 bg-white/10 px-6 py-3.5 text-xs font-bold text-[#c587b8] transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-400"
            >
              Let&apos;s Connect
            </AnchorLink>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
            className="mt-8 flex justify-center lg:justify-start"
          >
            <SocialMediaIcons />
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[455px]">
            {/* BACK FRAME */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-pink-300/50 bg-gradient-to-br from-pink-400/10 via-fuchsia-400/10 to-orange-300/10"
            />

            {/* SECOND SOFT FRAME */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 h-[92%] w-[92%] rounded-[2rem] bg-gradient-to-br from-fuchsia-500/10 to-transparent blur-lg"
            />

            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/50 bg-white/10 p-2 shadow-[0_20px_45px_rgba(100,35,90,0.18)] md:shadow-[0_25px_60px_rgba(100,35,90,0.22)]">
              <img
                src={nicolleImage}
                alt="Nicolle Bustos"
                width="910"
                height="1040"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-[430px] w-full rounded-[1.45rem] object-cover object-center transition-transform duration-700 hover:scale-[1.02] sm:h-[480px] lg:h-[520px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-2 rounded-[1.45rem] bg-gradient-to-t from-[#3f173d]/20 via-transparent to-transparent"
              />
            </div>

            {/* FLOATING CREATIVE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55 }}
              className="absolute -bottom-4 left-3 rounded-2xl border border-white/50 bg-[#f7eaf4]/95 px-4 py-3 shadow-[0_12px_32px_rgba(110,50,100,0.17)] sm:-left-6 sm:bottom-8"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#c36eb2]">
                Creative Focus
              </p>

              <p className="mt-1 font-playfair text-base font-semibold text-[#8a5a81]">
                Ideas that connect.
              </p>
            </motion.div>

            {/* DECORATIVE RING */}
            <div
              aria-hidden="true"
              className="absolute -right-4 top-[22%] h-14 w-14 rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-400 to-orange-300 p-[5px] shadow-[0_10px_25px_rgba(236,72,153,0.22)]"
            >
              <div className="h-full w-full rounded-full bg-[#fff8f5]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;