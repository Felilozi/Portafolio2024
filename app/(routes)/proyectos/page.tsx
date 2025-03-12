'use client'


import Avatar from "@/components/avatar/avatar";
import ConteinerPage from "@/components/container";
import CounterServices from "@/components/counter-sevices";
import CoverParticles from "@/components/cover-particles";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";




const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <CoverParticles />
            <ConteinerPage >

                <h1 className=" text-4xl leading-tight text-center md:text-left md:text-3xl md:mt-10">Proyectos {'&'}
                    <span className='fond-bold text-secondary'>  Desarrollo Profesional</span>
                </h1>
                <CounterServices />
                <TimeLine />
            </ConteinerPage>

        </>
    )
}

export default PageAboutMe;



//sfc stateless function component 