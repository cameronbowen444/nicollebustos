import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

const experiences = [
  {
    role: "Marketing Role",
    company: "Company Name",
    location: "Los Angeles, CA",
    date: "2025 — Present",
    description:
      "Supported brand, content, and marketing initiatives while collaborating across teams and audiences.",
    highlights: [
      "Campaign support",
      "Content strategy",
      "Cross-team collaboration",
    ],
  },
  {
    role: "President",
    company: "American Marketing Association",
    location: "CSUN",
    date: "2024 — 2025",
    description:
      "Led the organization, coordinated initiatives, and helped create opportunities for students interested in marketing.",
    highlights: [
      "Team leadership",
      "Event planning",
      "Member engagement",
    ],
  },
  {
    role: "Marketing Intern",
    company: "Company Name",
    location: "Los Angeles, CA",
    date: "2023 — 2024",
    description:
      "Contributed to creative projects, audience research, communication, and day-to-day marketing execution.",
    highlights: [
      "Market research",
      "Creative support",
      "Audience insight",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        w-full
        overflow-hidden
        py-16
        md:py-20
        lg:py-24
      "
    >
    

      <div
        className="
          pointer-events-none
          absolute
          -right-60
          bottom-0
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-orange-400/8
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto w-[90%] max-w-5xl">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          {/* LABEL */}
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-[2px]
                w-7
                bg-gradient-to-r
                from-pink-500
                to-orange-400
              "
            />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#c27ab4]
              "
            >
              My Journey
            </p>

            <span
              className="
                h-[2px]
                w-7
                bg-gradient-to-l
                from-pink-500
                to-orange-400
              "
            />
          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair
              text-3xl
              font-semibold
              leading-tight
              text-[#c08ab6]
              sm:text-4xl
              lg:text-[3rem]
            "
          >
            Experience that shaped
            <span
              className="
                ml-2
                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-orange-400
                bg-clip-text
                italic
                text-transparent
              "
            >
              how I work.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-[#b98eaf]
            "
          >
            A mix of leadership, collaboration, and hands-on marketing
            experience across teams, organizations, and real projects.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-14">
          {/* CENTER LINE - DESKTOP */}
          <div
            className="
              absolute
              left-4
              top-0
              h-full
              w-[2px]
              bg-gradient-to-b
              from-pink-500
              via-fuchsia-500
              to-orange-400
              opacity-50
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-10 md:space-y-14">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${experience.role}-${experience.company}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    md:gap-14
                  "
                >
                  {/* TIMELINE DOT */}
                  <div
                    className="
                      absolute
                      left-4
                      top-7
                      z-20
                      h-4
                      w-4
                      -translate-x-[7px]
                      rounded-full
                      bg-gradient-to-br
                      from-pink-500
                      via-fuchsia-500
                      to-orange-400
                      shadow-[0_0_20px_rgba(236,72,153,0.45)]
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  >
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-7
                        w-7
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border
                        border-pink-400/35
                      "
                    />
                  </div>

                  {/* EXPERIENCE CARD */}
                  <div
                    className={`
                      ml-10
                      md:ml-0
                      ${
                        isLeft
                          ? "md:col-start-1 md:pr-3"
                          : "md:col-start-2 md:pl-3"
                      }
                    `}
                  >
                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-pink-200/25
                        bg-gradient-to-br
                        from-white/[0.13]
                        via-pink-100/[0.07]
                        to-fuchsia-100/[0.08]
                        p-5
                        shadow-[0_14px_38px_rgba(100,35,90,0.08)]
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-pink-300/45
                        hover:shadow-[0_20px_45px_rgba(180,65,150,0.13)]
                      "
                    >
                      {/* TOP ACCENT */}
                      <div
                        className="
                          absolute
                          left-0
                          top-0
                          h-[2px]
                          w-full
                          bg-gradient-to-r
                          from-pink-500
                          via-fuchsia-500
                          to-orange-400
                          opacity-70
                        "
                      />

                      {/* DATE */}
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-xl
                            bg-gradient-to-br
                            from-pink-500
                            via-fuchsia-500
                            to-orange-400
                            text-sm
                            text-white
                            shadow-[0_8px_20px_rgba(220,70,170,0.16)]
                          "
                        >
                          <FiBriefcase />
                        </div>

                        <span
                          className="
                            rounded-full
                            border
                            border-pink-300/25
                            bg-white/[0.08]
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#c88bbb]
                          "
                        >
                          {experience.date}
                        </span>
                      </div>

                      {/* ROLE */}
                      <h3
                        className="
                          mt-5
                          font-playfair
                          text-xl
                          font-semibold
                          text-[#d2a4c9]
                        "
                      >
                        {experience.role}
                      </h3>

                      {/* COMPANY */}
                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-pink-400
                        "
                      >
                        {experience.company}
                      </p>

                      {/* LOCATION */}
                      <div
                        className="
                          mt-2
                          flex
                          items-center
                          gap-2
                          text-[11px]
                          text-[#a982a1]
                        "
                      >
                        <FiMapPin className="text-orange-400" />
                        <span>{experience.location}</span>
                      </div>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-4
                          text-[12px]
                          leading-5
                          text-[#b992af]
                        "
                      >
                        {experience.description}
                      </p>

                      {/* HIGHLIGHTS */}
                      <div
                        className="
                          mt-4
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {experience.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="
                              rounded-full
                              border
                              border-pink-300/20
                              bg-white/[0.07]
                              px-3
                              py-1.5
                              text-[9px]
                              font-semibold
                              text-[#bd8fb5]
                            "
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* EMPTY SIDE FOR ALTERNATING LAYOUT */}
                  <div
                    className={`
                      hidden
                      md:block
                      ${
                        isLeft
                          ? "md:col-start-2"
                          : "md:col-start-1 md:row-start-1"
                      }
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-12
            flex
            justify-center
          "
        >
          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-pink-300/40
              bg-white/5
              px-5
              py-2.5
              text-[11px]
              font-bold
              text-[#c487b8]
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-pink-400/70
              hover:bg-pink-500/10
              hover:text-pink-400
            "
          >
            Let&apos;s Connect

            <FiArrowUpRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;