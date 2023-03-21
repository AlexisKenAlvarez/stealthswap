import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowTemplate from '../components/HowTemplate';
import Slider from 'react-slick';

import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import AnimateText from '../components/AnimateText';

const How = () => {

    const howList = [
        {
            title: 'Swap',
            desc: 'Anonymizes your crypto by swapping it first to Monero* on Exchange A',
            num: ''
        },
        {
            title: 'Anonymity',
            desc: 'Sends your anonymous Monero from Exchange A to Exchange B',
            num: ''
        },
        {
            title: 'Poof',
            desc: 'Swaps the Monero on Exchange B to your desired receiving currency',
            num: ''
        },
        {
            title: 'Privacy',
            desc: 'Sends receiving currency to your desired wallet, breaking all links between the sender and receiver',
            num: ''
        },
    ]

    const [current, setCurrent] = useState(0)

    const handleAfterChange = (index) => {
        setCurrent(index);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: handleAfterChange, // use the afterChange event,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const sliderRef = useRef(null)

    const trans = [
        "0%",
        "100%",
        "200%",
        "300%",
        "400%"
    ]

    return (
        <section className='w-full px-8 md:px-10 relative h-auto py-20 overflow-hidden' id="how">

            <div className="flex flex-col items-end justify-end font-[900] text-9xl absolute right-[-3rem] bottom-0">
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 0.1, x: [200, 0]}} transition={{duration: 0.8, delay: 0.1}} className='text-center font-[900] text-[8rem] bg-gradient-to-b bg-clip-text from-wht/90 to-gry inline-block text-transparent opacity-10'>HOW IT WORKS</motion.p>
            </div>
            <div className="sm:w-60 sm:h-60 w-[10rem] h-[10rem] bg-gradient-to-br from-rd/90 to-black/50 rounded-full z-0 absolute top-[12rem] sm:left-[3rem] -left-24 mx-8 opacity-70" />
            <div className='w-[20rem] h-[20rem] bg-rd/50 rounded-full blur-[150px] absolute right-0 top-0 bottom-0 my-auto opacity-80' />
            <div className='w-[20rem] h-[20rem] bg-wht/30 rounded-full blur-[150px] absolute left-0 top-0 bottom-0 my-auto opacity-80' />



            <div className='max-w-[1500px] mx-auto pb-3 flex flex-col gap-y-3 relative z-10'>
                <AnimateText>
                    <h1 className='text-center md:text-8xl font-[900] sm:text-6xl text-4xl'>HOW IT WORKS</h1>
                    <p className='text-center font-[500] text-2xl bg-gradient-to-r bg-clip-text from-rd to-orng text-transparent w-fit mx-auto'>Monero as a tunnel between exchanges</p>
                </AnimateText>

                <div className="mt-24 2xl:max-w-[90rem] xl:max-w-[75rem] lg:max-w-[60rem] sm:max-w-[30rem] max-w-[18rem] pb-10 mx-auto w-fit">
                    <Slider {...settings} ref={sliderRef}>
                        {howList.map((items, i) => {
                            return (
                                <div className={`${current === i ? "" : "opacity-20"} transition-scale ease-in-out duration-300`} key={i}>

                                    <HowTemplate title={items.title} desc={items.desc} num={i + 1} />

                                </div>
                            )
                        })}
                    </Slider>
                    <div className="mt-5 flex items-center w-[98%] mx-auto gap-x-3">
                        <div className="h-[3rem] flex gap-x-3">
                            <button className="w-[3rem] h-full border-[1px] border-white rounded-full cursor-pointer flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.05] no-highlight" onClick={() => sliderRef?.current?.slickPrev()}>
                                <FaLongArrowAltLeft />
                            </button>
                            <button className="w-[3rem] h-full border-[1px] border-white rounded-full cursor-pointer flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.05] no-highlight" onClick={() => sliderRef?.current?.slickNext()}>
                                <FaLongArrowAltRight />
                            </button>

                        </div>
                        <div className="w-full h-[2px] relative mx-auto">
                            <div className="w-[25%] h-full bg-gradient-to-r from-rd to-orng transition-all ease-in-out duration-300" style={{ transform: `translateX(${trans[current]})` }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default How