import React from 'react';
import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className='pt-10 pb-24'>
            <div className=' md:flex md:justify-between md:gap-10 mt-20'>
                <motion.div
                    className=' md:w-1/3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className='font-playfair font-semibold text-4xl mb-5'>
                        My <span className='text-red'>SKILLS.</span>
                    </p>
                    <LineGradient className="w-1/3" />
                    <p className='mt-10 mb-7'>
                        Throughout my life in college, learning through real world projects, running a club and working with other professionals I am proud that I have been able to aquire these skills below.
                    </p>
                    
                </motion.div>
                <div className='mt-16 md:mt-0'>
                    { isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src={require("../assets/skills-image.png")}
                            />
                        </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10"
                            src={require("../assets/skills-image.png")}
                        />
                    )}
                </div>
            </div>
            {/* SKILLS */}
            <div className='md:flex md:justify-between mt-16 gap-32 '>
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>01</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Leadership</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
                    </div>
                    <p className='mt-5'>
                        Working on projects and test cases with other students have allowed me to be inclusive and open with others. I have found that exposing others skills and strengths, gives individuals the ability to feel safe in a group to share their opinion.
                    </p>
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10 '>
                            <p className='font-playfair font-semibold text-5xl'>02</p>
                            <p className='font-playfair font-semibold text-3xl'>Communication</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
                    </div>
                    <p className='mt-5'>
                        Communication is the only way to get your point accros and express yourself properly or strategically depending on the goal. Anyone who communicates well can reach any goal. Reading and practicing social skills have allowed me to grow in this skill. 
                    </p>
                </motion.div>

                {/* IMAGINATIVE */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10 '>
                            <p className='font-playfair font-semibold text-5xl'>03</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Strategy</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
                    </div>
                    <p className='mt-5'>
                        If the other two points above are invalid then strategy isn't possible to begin with. But I have also found that analytics, testing and scenarios are the best way to come up with the best strategies and plans within a project, team, or company.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills;