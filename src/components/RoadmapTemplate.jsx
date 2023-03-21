import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import AnimateText from './AnimateText'

const RoadmapTemplate = ({ num, title, list }) => {

    const [circRef, circView] = useInView({ triggerOnce: true, threshold: 1 })
    const [bilog, bView] = useInView({ triggerOnce: true, threshold: 1 })

    return (
        <div className="flex items-center w-fit mx-auto gap-x-9 relative lg:flex-row flex-col gap-y-5">
            <AnimateText>
                <div className="text-center text-white/70 lg:w-[10rem] lg:flex-col flex-row flex items-end gap-x-5">
                    <h1 className='font-[800] md:text-9xl text-6xl'>Q{num}</h1>
                    <h2 className='font-[600] md:text-5xl text-3xl mt-2'>2023</h2>
                </div>
            </AnimateText>

            <div className="w-10 h-[23rem] items-center justify-center relative lg:flex hidden">
                <div className={`absolute left-0 right-0 mx-auto w-[2px] bg-[#b9b9b9] translate-y-[50%] z-0 origin-top transition-all ease-in-out duration-500 ${circView ? "h-full" : "h-0"} `} style={num === 4 ? { display: "none" } : {}}></div>

                <div className="w-5 h-5 bg-[#b9b9b9] rounded-full relative z-10 transition-all ease-in-out duration-500 delay-75" style={ bView ? {transform: `scale(1)`} : {transform: `scale(0.5)`}} ref={bilog}>
                </div>

                <div className="w-2 h-2 bg-transparent absolute bottom-0 left-0 translate-y-[2300%]" style={num === 4 ? { display: "none" } : {}} ref={circRef}></div>
            </div>
            <AnimateText>
                <div className="md:w-[37rem] sm:w-[25rem] w-[18rem] sm:h-[18rem] h-[21rem] bg-wht/10 backdrop-blur rounded-[15px] border-[1px] text-left p-10 relative">
                    <img src={`/${num}.webp`} alt="" className="absolute h-[90%] bottom-0 right-0 opacity-10" />

                    <h1 className='bg-gradient-to-r bg-clip-text from-rd to-orng inline-block text-transparent font-[700] sm:text-4xl text-2xl'>{title}</h1>
                    <ul className="flex flex-col gap-y-3 mt-5">
                        {list.map((items, i) => {
                            return (
                                <li className="text-white/70 flex items-center gap-x-3" key={i}>
                                    • {items}
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </AnimateText>

        </div>
    )
}

export default RoadmapTemplate