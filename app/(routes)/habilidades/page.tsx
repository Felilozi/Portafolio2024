'use client'

import TransitionPage from "@/components/transition-page";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { dataExtra } from "@/data";
import Image from "next/image";

import Avatarhabilidad from "@/components/avatar/avatar-habilidad";
import Avatar from "@/components/avatar/avatar";



const Habilidades = () => {
    return (

        <div >

            <TransitionPage />
            <div className="flex flex-col justify-center md:h-dvh md:mt-auto mt-3 h-dvh ">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Habilidades adicionales {' '}
                    <span className='block fond-bold text-secondary'>Tecnicas y de Gestion</span>
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                            }}
                            freeMode={true} 
                            pagination={{
                                clickable: true 

                            }}
                            modules={[Pagination]}
                            className="b-black h-[295px] md:h-[250] w-[270px] md:w-[550px]"
                        >{dataExtra.map(({ id, name, description, imageUrl }) => (
                            <SwiperSlide key={id}>
                                <Image src={imageUrl} alt={name} width="100" height="100" className="mx-auto rounded-full" />
                                <h4 className='text-center'>{name}</h4>
                                <div className="mt-5 text-center">
                                    {description}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Avatar />
                    <Avatarhabilidad />
                    </div>

                </div>
            </div>




        </div>
    );
}

    ;

export default Habilidades;