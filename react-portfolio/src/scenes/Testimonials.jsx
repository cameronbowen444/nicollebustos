import React from 'react'
import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import cameron from '../assets/cameron.png'
import madeline from '../assets/madeline.jpeg';
import isabelle from '../assets/isabelle.png'

const Testimonials = () => {

    const testimonialStyles = `mx-auto relative max-w-[400px] h-[400px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

    return (
        <section id="testimonials" className='pt-32 pb-16 mx-auto'>
            <motion.div
                className='md:w-1/3 text-center md:text-left'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className='font-playfair font-semibold text-4xl mb-5 text-red'>
                    TESTIMONIALS
                </p>
                <LineGradient className="mx-auto w-2/4" />
                <p className='mt-10 '>
                    Can't have proof of skills or real world experience without people who have something to say about their time working with me.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className='md:flex md:justify-between gap-8'>
                <motion.div
                    className={`bg-blue ${testimonialStyles}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <div className='flex justify-center relative'>
                        <img src={madeline} alt="madaline" className='w-[200px] rounded-full bg-white border-2' />
                    </div>
                    <p className='font-playfair text-6xl'>“</p>
                    <p className='text-center text-xl'>
                        Nicolle has a talent for knowing how things need to be done. Very glad I had the opportunity to work with her.
                    </p>
                </motion.div>

                <motion.div
                    className={`bg-red ${testimonialStyles} `}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <div className='flex justify-center relative'>
                        <img src={cameron} alt="cameron" className='w-[200px] rounded-full bg-white border-2' />
                    </div>
                    <p className='font-playfair text-6xl'>“</p>
                    <p className='text-center text-xl'>
                        I have never met such a talented person in her field. She really knows how to do her research when trying to solve something.
                    </p>
                </motion.div>

                <motion.div
                    className={`bg-yellow ${testimonialStyles}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <div className='flex justify-center relative'>
                        <img src={isabelle} alt="isabelle" className='w-[200px] rounded-full bg-white border-2' />
                    </div>
                    <p className='font-playfair text-6xl'>“</p>
                    <p className='text-center text-xl'>
                        Nicolle has a natural ability to lead a group and She was able to guide our group into having the top project in our class.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials;