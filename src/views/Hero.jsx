import React from 'react'
import { motion } from 'framer-motion';
import { heroLinks } from '../constants';

const Hero = () => {
    const containerVariants = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // sets a 0.1 second delay between each child animation
                delayChildren: 0.2, // sets a 0.2 second delay before the first child animation starts
            }
        },
        hidden: {
            opacity: 0
        }
    };

    const childVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        },
        hidden: {
            opacity: 0,
            x: -250
        },
    };

    return (
        <>
            <main className='min-h-screen px-8 md:px-10 flex items-center text-center md:text-left relative overflow-hidden'>
                <div className='max-w-[1500px] mx-auto h-full relative z-10 items-center flex flex-col'>
                    <div className="relative">
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7}} className="sm:bg-wht/10 sm:backdrop-blur rounded-[15px] sm:border-[1px] mt-20 sm:mt-0 border-wht w-fit lg:py-10 2xl:py-16 py-10 xl:px-[10rem] lg:px-[5rem] px-4 flex flex-col lg:gap-y-10 items-center justify-items-center relative z-10">
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: [20, 0] }} transition={{ duration: 0.8, delay: 0.1 }} className='lg:text-3xl font-[500] sm:text-2xl text-xl'>THIS IS STEALTH SWAP</motion.p>
                            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1, y: [20, 0] }} transition={{ duration: 0.8, delay: 0.15 }} className='text-center font-[900] 2xl:text-8xl lg:text-6xl sm:text-4xl text-2xl max-w-[45rem] 2xl:max-w-[70rem] bg-gradient-to-r bg-clip-text from-rd to-orng inline-block text-transparent mt-2 lg:mt-0 '>CLEANEST, CHEAPEST, MOST TRANSPARENT</motion.h1>
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, y: [20, 0] }} transition={{ duration: 0.8, delay: 0.2 }} className='text-center text-wht/70 max-w-[35rem] sm:mt-7 mt-5 lg:mt-0 sm:text-md text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fugiat cum labore minima illo nisi praesentium esse possimus numquam eveniet quo vero delectus sunt molestiae.</motion.p>
                            <div className="flex justify-center gap-x-10 w-full lg:flex-row flex-col items-center sm:gap-y-7 gap-y-3 mt-8 lg:mt-0 sm:text-lg text-xs">
                                {heroLinks.map((link, i) =>
                                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1, y: [20, 0] }} transition={{ duration: 0.8, delay: 0.1 * i }} key={i} className="font-[500] bg-blk py-4 px-10 rounded-[5px] group"><span className='bg-wht bg-clip-text from-rd to-orng inline-block text-transparent group-hover:bg-gradient-to-r'>{link.name}</span></motion.button>
                                )}
                            </div>
                        </motion.div>
                        <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.5}} className="w-36 h-36 bg-gradient-to-tr from-rd to-wht/50 rounded-full z-0 absolute bottom-[-3rem] left-[-5rem] mx-8 opacity-70" />
                    </div>
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5}} className="w-60 h-60 bg-gradient-to-br from-rd to-wht/50 rounded-full z-0 absolute bottom-[3rem] left-[-3rem] mx-8 opacity-70" />
                    <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{duration: 1.5}} className="w-60 h-60 bg-gradient-to-tl from-rd to-wht/50 rounded-full z-0 absolute top-[-3rem] right-[-5rem] mx-8 opacity-70" />
                </div>
                <div className='w-[20rem] h-[20rem] bg-rd rounded-full blur-[150px] absolute left-0 bottom-0 opacity-80' />
                <div className='w-[20rem] h-[20rem] bg-wht rounded-full blur-[150px] absolute right-0 top-0 opacity-80' />
                <div className="flex flex-col items-end justify-end font-[900] text-9xl absolute right-[-3rem] bottom-0">
                    <p className='text-center font-[900] text-[10rem] bg-gradient-to-b bg-clip-text from-wht/90 to-gry inline-block text-transparent opacity-10'>STEALTH</p>
                    <p className='text-center font-[900] text-[10rem] bg-gradient-to-b bg-clip-text from-wht/90 to-gry inline-block text-transparent opacity-10'>SWAP</p>
                </div>
            </main>
        </>
    )
}

export default Hero