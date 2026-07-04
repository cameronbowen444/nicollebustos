import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiArrowUpRight } from "react-icons/fi";

const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        pt-24
        md:pt-28
      "
    >
      {/* FULL WIDTH BACKGROUND GLOWS */}
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  {/* LEFT PINK GLOW */}
  <div
    className="
      absolute
      -left-[22rem]
      top-[8%]
      h-[46rem]
      w-[46rem]
      rounded-full
      bg-pink-500/10
      blur-[170px]
      mix-blend-screen
    "
  />

  {/* CENTER FUCHSIA GLOW */}
  <div
    className="
      absolute
      left-[20%]
      top-[15%]
      h-[40rem]
      w-[40rem]
      rounded-full
      bg-fuchsia-500/8
      blur-[180px]
      mix-blend-screen
    "
  />

  {/* RIGHT PURPLE GLOW */}
  <div
    className="
      absolute
      -right-[22rem]
      top-[5%]
      h-[48rem]
      w-[48rem]
      rounded-full
      bg-purple-500/10
      blur-[180px]
      mix-blend-screen
    "
  />

  {/* BOTTOM ORANGE GLOW */}
  <div
    className="
      absolute
      bottom-[-24rem]
      left-[35%]
      h-[42rem]
      w-[42rem]
      rounded-full
      bg-orange-400/8
      blur-[180px]
      mix-blend-screen
    "
  />
</div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-[90%]
          max-w-6xl
          items-center
          gap-12
          pb-16
          pt-8
          lg:min-h-[calc(100vh-110px)]
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-16
          lg:pb-10
          lg:pt-0
        "
      >
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -35,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* SMALL TOP BADGE */}
            <div
              className="
                mb-6
                flex
                justify-center
                lg:justify-start
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-pink-300/40
                  bg-white/10
                  px-4
                  py-2
                  shadow-[0_8px_30px_rgba(236,72,153,0.08)]
                  backdrop-blur-md
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-gradient-to-r
                    from-pink-500
                    to-orange-400
                  "
                />

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#c57bb6]
                    sm:text-[10px]
                  "
                >
                  Marketing · Brand · Creative Strategy
                </p>
              </div>
            </div>

            {/* NAME */}
            <h1
              className="
                text-center
                font-playfair
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                text-[#b477aa]
                sm:text-6xl
                lg:text-left
                lg:text-[4.7rem]
              "
            >
              Nicolle
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-pink-500
                  via-fuchsia-500
                  to-orange-400
                  bg-clip-text
                  italic
                  text-transparent
                "
              >
                Bustos
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mx-auto
                mt-7
                max-w-lg
                text-center
                text-[15px]
                leading-7
                text-[#b583aa]
                lg:mx-0
                lg:text-left
                lg:text-base
              "
            >
              Marketing professional and CSUN graduate focused on creating
              meaningful brands, engaging content, and strategies that connect
              with real people.
            </p>

            {/* AMA CREDENTIAL */}
            <div
              className="
                mx-auto
                mt-5
                flex
                max-w-lg
                items-center
                justify-center
                gap-3
                lg:mx-0
                lg:justify-start
              "
            >
              <div
                className="
                  h-[2px]
                  w-8
                  shrink-0
                  bg-gradient-to-r
                  from-pink-500
                  to-orange-400
                "
              />

              <p
                className="
                  text-center
                  text-xs
                  font-medium
                  leading-5
                  text-[#c587b8]
                  lg:text-left
                  lg:text-sm
                "
              >
                Former President of the American Marketing Association
              </p>
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className="
              mt-8
              flex
              flex-col
              items-center
              gap-3
              sm:flex-row
              sm:justify-center
              lg:justify-start
            "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
          >
            {/* WORK BUTTON */}
            <AnchorLink
              href="#experience"
              onClick={() => setSelectedPage("work")}
              className="
                group
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-orange-400
                px-6
                py-3.5
                text-xs
                font-bold
                text-white
                shadow-[0_10px_28px_rgba(236,72,153,0.24)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_34px_rgba(236,72,153,0.32)]
              "
            >
              View My Work
              <FiArrowUpRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </AnchorLink>

            {/* CONTACT BUTTON */}
            <AnchorLink
              href="#contact"
              onClick={() => setSelectedPage("contact")}
              className="
                flex
                items-center
                justify-center
                rounded-full
                border
                border-pink-300/70
                bg-white/5
                px-6
                py-3.5
                text-xs
                font-bold
                text-[#c587b8]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-pink-400
                hover:bg-pink-500/10
                hover:text-pink-400
              "
            >
              Let&apos;s Connect
            </AnchorLink>
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            className="
              mt-8
              flex
              justify-center
              lg:justify-start
            "
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.55,
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>

        {/* =========================
            RIGHT IMAGE
        ========================== */}
        <motion.div
          className="
            order-1
            flex
            justify-center
            lg:order-2
            lg:justify-end
          "
          initial={{
            opacity: 0,
            x: 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="
              relative
              w-full
              max-w-[380px]
              sm:max-w-[420px]
              lg:max-w-[455px]
            "
          >
            {/* BACK FRAME */}
            <div
              className="
                absolute
                -right-4
                -top-4
                h-full
                w-full
                rounded-[2rem]
                border
                border-pink-300/50
                bg-gradient-to-br
                from-pink-400/10
                via-fuchsia-400/10
                to-orange-300/10
              "
            />

            {/* SECOND SOFT FRAME */}
            <div
              className="
                absolute
                -bottom-5
                -left-5
                h-[92%]
                w-[92%]
                rounded-[2rem]
                bg-gradient-to-br
                from-fuchsia-500/10
                to-transparent
                blur-xl
              "
            />

            {/* IMAGE CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.8rem]
                border
                border-white/50
                bg-white/10
                p-2
                shadow-[0_25px_60px_rgba(100,35,90,0.22)]
                backdrop-blur-sm
              "
            >
              <img
                alt="Nicolle Bustos"
                src={require("../assets/nicolle.jpeg")}
                className="
                  h-[430px]
                  w-full
                  rounded-[1.45rem]
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                  sm:h-[480px]
                  lg:h-[520px]
                "
              />

              {/* SUBTLE IMAGE OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-2
                  rounded-[1.45rem]
                  bg-gradient-to-t
                  from-[#3f173d]/20
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* FLOATING CREATIVE CARD */}
            <motion.div
              className="
                absolute
                -bottom-4
                left-3
                rounded-2xl
                border
                border-white/50
                bg-[#f7eaf4]/90
                px-4
                py-3
                shadow-[0_12px_32px_rgba(110,50,100,0.17)]
                backdrop-blur-xl
                sm:-left-6
                sm:bottom-8
              "
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.55,
              }}
            >
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#c36eb2]
                "
              >
                Creative Focus
              </p>

              <p
                className="
                  mt-1
                  font-playfair
                  text-base
                  font-semibold
                  text-[#8a5a81]
                "
              >
                Ideas that connect.
              </p>
            </motion.div>

            {/* SMALL DECORATIVE RING */}
            <div
              className="
                absolute
                -right-4
                top-[22%]
                h-14
                w-14
                rounded-full
                bg-gradient-to-br
                from-pink-400
                via-fuchsia-400
                to-orange-300
                p-[5px]
                shadow-[0_10px_25px_rgba(236,72,153,0.22)]
              "
            >
              <div
                className="
                  h-full
                  w-full
                  rounded-full
                  bg-[#fff8f5]
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
