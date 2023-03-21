import React from 'react'
import AnimateText from '../components/AnimateText'
import RoadmapTemplate from '../components/RoadmapTemplate'
import { roadmapList } from '../constants'

const Roadmap = () => {
    return (
        <main className='w-full px-8 md:px-10 h-auto pt-20 relative z-10'>

            <div className='w-[20rem] h-[20rem] bg-wht/30 rounded-full blur-[150px] absolute left-0 top-0 bottom-0 my-auto opacity-80' />
            <div className='w-[20rem] h-[20rem] bg-wht/20 rounded-full blur-[150px] absolute right-0 bottom-32 opacity-80' />

             
            <div className='max-w-[1500px] mx-auto pb-32 pt-3 flex flex-col gap-y-10 relative z-10'>
                <div className="text-center">
                    <AnimateText>
                        <h1 className='text-center md:text-6xl font-[900] text-4xl 2xl:text-7xl'>ROADMAP</h1>
                    </AnimateText>

                    <div className="mt-10 flex flex-col gap-y-10 lg:gap-y-0">

                        {roadmapList.map((items, i) => {
                            return (
                                <RoadmapTemplate num={i + 1} title={items.title} list={items.desc} key={i} />
                            )
                        })}

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Roadmap