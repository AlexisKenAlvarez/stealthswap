import React from 'react'
import AnimateImage from '../components/AnimateImage'
import AnimateText from '../components/AnimateText'
import Roadmap from './Roadmap'

const Why = () => {
    return (
        <>
            <main className='w-full px-8 md:px-10 relative h-auto z-10 py-16' id="why">

                <div className="sm:w-60 sm:h-60 w-[10rem] h-[10rem] bg-gradient-to-bl from-rd/90 to-black/50 rounded-full absolute bottom-[3rem] sm:left-[3rem] -left-24 mx-8 opacity-70" />

                <div className='w-[20rem] h-[20rem] bg-rd/50 rounded-full blur-[150px] absolute left-0 bottom-0 my-auto opacity-80 z-10' />
                <div className='w-[20rem] h-[20rem] bg-rd/20 rounded-full blur-[150px] absolute right-0 top-0 my-auto opacity-80 z-10' />

                <div className="w-36 h-36 bg-gradient-to-br from-rd to-wht/50 rounded-full z-0 absolute top-[3rem] right-[5rem] mx-8 opacity-70" />

                <div className='max-w-[1500px] mx-auto pb-32 pt-3 flex flex-col gap-y-10 relative z-10'>

                    <div className="bg-wht/10 backdrop-blur rounded-[15px] border-[1px] py-20  sm:px-20 px-9 flex items-center justify-center w-fit mx-auto lg:flex-row flex-col">

                        <div className="text-center lg:text-left">
                            <AnimateText>
                                <h1 className='font-[900] xl:text-6xl lg:text-4xl sm:text-4xl text-2xl bg-gradient-to-r bg-clip-text from-rd to-orng inline-block text-transparent mt-2 lg:mt-0'>WHY THIS WORKS?</h1>
                            </AnimateText>

                            <AnimateText>
                                <div className="font-[200] max-w-[30rem] gap-y-4 flex flex-col mt-4">
                                    <p className="">
                                        When a Monero transaction is sent, there is no way to see the sending party, receiving party, nor the transaction value.
                                    </p>

                                    <p className="">
                                        By sending Monero from one exchange to another, it vanishes from the ledger, then suddenly reappears to a new exchange that has no tie to the former.
                                    </p>
                                </div>
                            </AnimateText>

                        </div>
                        <AnimateImage src="laptop2" className="xl:w-[33rem] 2xl:w-[35rem] w-[30rem] mt-12 lg:mt-0" />

                    </div>
                </div>
            </main>

            <Roadmap />

        </>

    )
}

export default Why