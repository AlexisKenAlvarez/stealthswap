import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Footer = () => {
    const options = {
        triggerOnce: true,
        thresold: 0.3
    }

    const [topoRef, topoView] = useInView(options)
    const [bulbRef, bulbView] = useInView(options)
    const [parentRef, parentView] = useInView(options)
    return (
        <footer className='bg-black flex flex-col w-full'>
            <div className="w-full">
                <div className="max-w-[1500px] mx-auto relative flex flex-col md:flex-row gap-y-2 justify-between items-center opacity-70 py-6 px-8 md:px-10">
                    <p className='text-sm'>contact@stealthswap.com</p>
                    <div className="flex items-center justify-center gap-x-4">
                        <BsTwitter className='cursor-pointer hover:text-accent transition-all ease-in-out duration-200' />
                        <FaTelegramPlane className='cursor-pointer hover:text-accent transition-all ease-in-out duration-200' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer