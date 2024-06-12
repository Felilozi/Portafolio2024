'use client'

import Avatar from "@/components/avatar";
import ConteinerPage from "@/components/container";
import CounterServices from "@/components/counter-sevices";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";




const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ConteinerPage >
                <Avatar />
                <h1 className=" text-4xl leading-tight text-center md:text-left md:text-3xl md:mt-10">Toda mi{' '}
                    <span className='fond-bold text-secondary'>trayectoria profesional</span>
                </h1>
                <CounterServices />
                <TimeLine />
            </ConteinerPage>

        </>
    )
}

export default PageAboutMe;



//sfc stateless function component 