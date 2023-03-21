import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AnimateText = (props) => {

    const [ref, view] = useInView({ triggerOnce: true, threshold: 0.5 })

    return (
        <motion.div ref={ref} initial={{ opacity: 0 }} animate={view ? { opacity: 1, y: [20, 0] } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="">
            {props.children}
        </motion.div>
    )
}   

export default AnimateText