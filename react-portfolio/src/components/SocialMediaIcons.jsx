import React from 'react';
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs'
const SocialMediaIcons = () => {
    return (
        <div className='flex justify-center md:justify-start my-10 gap-7'>
            <a 
                className='hover:opacity-50 transition duration-500'
                href="https://www.linkedin.com/in/nicolle-bustos-3ab6801a3/"
                target='_blank'
                rel="noreferrer"
            >
                <BsLinkedin size={40} />
            </a>
            <a 
                className='hover:opacity-50 transition duration-500'
                href="https://www.instagram.com/nicolle.bustos/"
                target='_blank'
                rel="noreferrer"
            >
                <BsInstagram size={40} />
            </a>
            <a 
                className='hover:opacity-50 transition duration-500'
                href="https://www.facebook.com/unicorn504"
                target='_blank'
                rel="noreferrer"
            >
                <BsFacebook size={40} />
            </a>
        </div>
    )
}

export default SocialMediaIcons;