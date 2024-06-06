'use client'

import Avatar from "@/components/avatar";
import ConteinerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";




const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ConteinerPage >
                <Avatar />
                <h1 className="bg-black text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi{' '} 
                    <span className='fond-bold text-secondary '>trayectoria profesional</span>

                </h1>
            </ConteinerPage>

        </>
    );
}

export default PageAboutMe;



//sfc stateless function component 