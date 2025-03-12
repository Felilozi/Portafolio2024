'use client'


import AvatarServices from "@/components/avatar/avatar-services";
import CircleImage from "@/components/circle-image";
import CoverParticles from "@/components/cover-particles";
import Habilidades from "@/components/habilidades/habilidades";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from 'next/link';

const ServicesPage = () => {
    
    return (
        <>
            <TransitionPage />
            <CoverParticles />
            
            

            <div className=" flex flex-col max-w-5xl my-36 mx-auto">
                <div className="">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis
                        <span className="font-bold text-secondary"> servicios.
                        </span>
                    </h1>
                    <p className="mb-3 text-gray-300 "> Brindo soluciones especializadas en desarrollo web frontend, creando sitios web y aplicaciones visualmente atractivas y altamente funcionales. Con un enfoque en la última tecnología, diseño interfaces intuitivas y responsivas que fortalecen la identidad de marca de mis clientes y optimizan su presencia digital.
                    </p>
                    <Link href='/contacto' className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/50 ">Contacta conmigo</Link>

                </div>
                {/* Slider*/}
                <div >
                <SliderServices />  
                
                </div>
                <Habilidades/>
                
            </div>
            
        </>);
}

    ;

export default ServicesPage;
