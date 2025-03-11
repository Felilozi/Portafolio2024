'use client'


import AvatarServices from "@/components/avatar/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from 'next/link';

const ServicesPage = () => {
    
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />

            <div className="  grid items-center justify-center h-screen max-w-5xl gap-6 my-28 mx-auto md:my-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[370px] ">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis
                        <span className="font-bold text-secondary"> servicios.
                        </span>
                    </h1>
                    <p className="mb-3 text-xm text-gray-300 "> Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
                    </p>
                    <Link href='/contacto' className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/50 ">Contacta conmigo</Link>

                </div>
                {/* Slider*/}
                <div >
                <SliderServices />  
                </div>
                
                
            </div>
            
        </>);
}

    ;

export default ServicesPage;
