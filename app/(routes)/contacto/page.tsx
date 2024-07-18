'use client'


import ConteinerPage from "@/components/container";


import TransitionPage from "@/components/transition-page";




const Contacto = () => {
    return (
        <>
            <TransitionPage />
            <ConteinerPage >
            <h1 className=" text-4xl leading-tight text-center md:text-5xl md:mt-10">Contacta {' '}
                    <span className='fond-bold text-secondary'>conmigo</span>
                </h1>

            </ConteinerPage>

        </>
    )
}

export default Contacto;