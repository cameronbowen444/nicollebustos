import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiArrowUpRight } from "react-icons/fi";

const About = ({ setSelectedPage }) => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-16 md:py-20"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-56 top-0 h-[28rem] w-[28rem] rounded-full bg-pink-500/8 blur-[140px]" />
      <div className="pointer-events-none absolute -right-56 bottom-0 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/8 blur-[150px]" />

      <div className="relative z-10 mx-auto grid w-[90%] max-w-5xl items-center gap-10 lg:grid-cols-[0.75fr_1fr] lg:gap-14">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px]">
            {/* SOFT BACK SHAPE */}
            <div
              className="
                absolute left-1/2 top-1/2 h-[320px] w-[240px]
                -translate-x-1/2 -translate-y-1/2
                rounded-[45%]
                bg-gradient-to-b from-pink-400/25 via-fuchsia-400/18 to-orange-300/20
                blur-[2px]
              "
            />

            {/* IMAGE */}
            <div className="relative z-10 flex justify-center">
              <img
                src={require("../assets/about.jpg")}
                alt="Nicolle Bustos"
                className="
                  h-[340px] w-auto object-contain
                  sm:h-[370px]
                  md:h-[400px]
                "
              />
            </div>

            {/* SMALL FLOATING TAG */}
            <div
              className="
                absolute bottom-2 left-1/2 z-20
                -translate-x-1/2
                rounded-full border border-white/30 bg-[#f7e9f4]/85
                px-4 py-2
                shadow-[0_10px_24px_rgba(100,40,90,0.12)]
                backdrop-blur-md
              "
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#bf66aa]">
                Creative + Strategic
              </p>
            </div>
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {/* LABEL */}
          <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-[2px] w-7 bg-gradient-to-r from-pink-500 to-orange-400" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c17ab3]">
              About Me
            </p>
          </div>

          {/* HEADING */}
          <h2
            className="
              text-center font-playfair text-3xl font-semibold leading-tight
              text-[#b47ba9]
              sm:text-4xl
              lg:text-left lg:text-[3rem]
            "
          >
            Strategy, creativity,
            <span className="block bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 bg-clip-text italic text-transparent">
              and a human approach.
            </span>
          </h2>

          {/* TEXT */}
          <div
            className="
              mx-auto mt-5 max-w-xl space-y-4
              text-center text-sm leading-7 text-[#b98eaf]
              lg:mx-0 lg:text-left
            "
          >
            <p>
              I&apos;m Nicolle Bustos, a marketing professional and CSUN
              graduate who enjoys combining thoughtful strategy,
              creativity, and communication to help brands connect
              with people in a meaningful way.
            </p>

            <p>
              My background has helped me build experience across
              branding, content, leadership, and creative execution,
              with a focus on making ideas feel clear, intentional,
              and memorable.
            </p>

            <p>
              As a former President of the American Marketing
              Association, I&apos;ve also developed a strong
              appreciation for collaboration, adaptability, and
              understanding the audience behind every campaign.
            </p>
          </div>

          {/* SMALL HIGHLIGHTS */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-pink-300/20 bg-white/5 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-[11px] font-bold text-pink-400">Brand</p>
              <p className="mt-1 text-[10px] text-[#a77d9f]">
                Voice & positioning
              </p>
            </div>

            <div className="rounded-xl border border-fuchsia-300/20 bg-white/5 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-[11px] font-bold text-fuchsia-400">
                Strategy
              </p>
              <p className="mt-1 text-[10px] text-[#a77d9f]">
                Clear, purposeful ideas
              </p>
            </div>

            <div className="rounded-xl border border-orange-300/20 bg-white/5 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-[11px] font-bold text-orange-400">
                Creative
              </p>
              <p className="mt-1 text-[10px] text-[#a77d9f]">
                Content that connects
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <AnchorLink
              href="#experience"
              onClick={() => setSelectedPage?.("work")}
              className="
                group inline-flex items-center gap-2 rounded-full
                border border-pink-300/40 bg-white/5 px-5 py-2.5
                text-[11px] font-bold text-[#c487b8]
                backdrop-blur-md transition-all duration-300
                hover:-translate-y-1 hover:border-pink-400/70
                hover:bg-pink-500/10 hover:text-pink-400
              "
            >
              See My Work
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </AnchorLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;