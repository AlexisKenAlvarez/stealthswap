import React from 'react'

const HowTemplate = ({ title, desc, num }) => {
    return (
        <div className="2xl:w-[30rem] 2xl:h-[19rem] h-[16rem] bg-wht/10 backdrop-blur rounded-[15px] border-[1px] relative flex items-center m-2">
            
            <img src={`/${num}.webp`} alt="1" className="absolute h-full opacity-10" />
            <div className="w-full h-full p-8 flex items-center">
                <div className="-mt-8">
                    <h1 className='md:text-5xl text-3xl font-black'>{title}</h1>
                    <p className="mt-6">{desc}</p>
                </div>
            </div>

            

        </div>
    )
}

export default HowTemplate