'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { dataExtra } from "@/data";
import Image from "next/image";




const Habilidades = () => {
    return (

        <div > <div className=" ">
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 ">Conocimientos  {' '}
                    <span className='font-bold text-secondary'>adicionales</span>
                </h1>
                <div className="mx-52">
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 15
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 15
                                }
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true

                            }}
                            modules={[Pagination]}
                            className=" h-[440px] w-[270px] md:w-[550px]"
                        >{dataExtra.map(({ id, name, description, imageUrl }) => (
                            <SwiperSlide key={id}>
                                <div className="flex px-6 row md:flex-col py-6 h-[400px] rounded-lg cursor-pointer bg-[rgba(11,98,90)] flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(11,98,90)] transition-all duration-300 border-secondary border-2">
                                    <Image src={imageUrl} alt={name} width="100" height="100" className="mx-auto rounded-full" />
                                    <h4 className='text-center'>{name}</h4>
                                    <div className="mt-5 text-center">
                                        {description}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>

                    </div>

                </div>
            </div>




        </div>
    );
}

    ;

export default Habilidades;