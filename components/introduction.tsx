'use client'
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
const Introduction = () => {
    return (
        <div className='z-20 w-full '>
            <div className=' z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2' >
                <Image src='/home-4.png' priority width="400" height="400" alt="Avatar"  />
                <div className="  flex flex-col justify-center max-w-md">
                    <h1 className=" mb-4 text-2xl leading-tight text-center md:text-left
            md:text-4xl md:mb-10">Si te propones
                        <TypeAnimation
                            sequence={[
                                " innovar, crearás soluciones únicas",
                                1000,
                                " ser creativo, tus proyectos destacarán",
                                1000,
                                " crecer, avanza sin rendirte.",
                                100

                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className='block font-bold text-secondary'
                        /></h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 md:justify-start md:gap-10 " >Como desarrolladora frontend con habilidades en diseño gráfico, me especializo en crear experiencias digitales que combinan funcionalidad y atractivo visual.</p>
                    <div className='flex item-center justify-center gap-2 '  >
                        <Link
                            href='https://github.com/Felilozi'
                            className='px-3 py-2 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>Ver Proyectos
                        </Link>
                        <Link
                            href='/projects'
                            className='px-3 py-2 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>Contacta conmigo
                        </Link>

                    </div>

                </div>
            </div>
        </div>);
}



export default Introduction;