import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'


const AnimateImage = ({ src, className }) => {

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

    return (
        <motion.img src={`/${src}.webp`} alt={src} className={`${className}`} initial={{ opacity: 0 }} animate={inView ? { opacity: 1, scale: [1.2, 1] } : {}} transition={{ duration: 0.8 }} ref={ref}>

        </motion.img>
    )
}

export default AnimateImage