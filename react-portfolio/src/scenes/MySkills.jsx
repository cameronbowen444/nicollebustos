import React from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiMessageCircle,
  FiTarget,
  FiCompass,
  FiEdit3,
  FiBarChart2,
} from "react-icons/fi";

const skills = [
  {
    title: "Leadership",
    description: "Leading teams, organizing ideas, and helping people do their best work.",
    icon: FiUsers,
    accent: "from-pink-500 via-fuchsia-500 to-pink-400",
  },
  {
    title: "Communication",
    description: "Turning ideas into clear messaging that connects with people.",
    icon: FiMessageCircle,
    accent: "from-fuchsia-500 via-purple-500 to-pink-500",
  },
  {
    title: "Strategy",
    description: "Building focused plans around audience needs, goals, and insight.",
    icon: FiTarget,
    accent: "from-orange-400 via-pink-500 to-fuchsia-500",
  },
  {
    title: "Brand Thinking",
    description: "Creating consistency across voice, visuals, and audience experience.",
    icon: FiCompass,
    accent: "from-pink-400 via-rose-500 to-orange-400",
  },
  {
    title: "Content & Creative",
    description: "Developing ideas and content with personality, clarity, and purpose.",
    icon: FiEdit3,
    accent: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Analytics & Research",
    description: "Using data and research to guide stronger marketing decisions.",
    icon: FiBarChart2,
    accent: "from-orange-400 via-fuchsia-500 to-purple-500",
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

const MySkills = () => {
  return (
    <section id="skills" className="relative w-full overflow-hidden py-16 md:py-20">
      <div className="relative z-10 mx-auto w-[90%] max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-gradient-to-r from-pink-500 to-orange-400" />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c27ab4]">
              Core Strengths
            </p>

            <span className="h-[2px] w-7 bg-gradient-to-l from-pink-500 to-orange-400" />
          </div>

          <h2 className="font-playfair text-3xl font-semibold leading-tight text-[#c08ab6] sm:text-4xl lg:text-[3rem]">
            Skills that help ideas
            <span className="ml-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 bg-clip-text italic text-transparent">
              connect.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#b98eaf]">
            A mix of strategy, creativity, communication, and insight shaped
            through leadership and hands-on marketing experience.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-pink-200/25 bg-gradient-to-br from-white/[0.12] via-pink-100/[0.07] to-fuchsia-100/[0.08] p-5 shadow-[0_12px_35px_rgba(100,35,90,0.08)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-pink-300/45 hover:shadow-[0_18px_40px_rgba(180,65,150,0.13)]"
              >
                {/* TOP GRADIENT LINE */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${skill.accent} opacity-70`}
                />

                {/* LIGHTWEIGHT SOFT ACCENT */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${skill.accent} opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.12]`}
                />

                {/* ICON */}
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${skill.accent} text-lg text-white shadow-[0_8px_20px_rgba(220,70,170,0.16)]`}
                >
                  <Icon />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-4">
                  <h3 className="font-playfair text-lg font-semibold text-[#d0a4c7]">
                    {skill.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-5 text-[#b992af]">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;