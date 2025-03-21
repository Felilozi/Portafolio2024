'use client'

import { serviceData } from "@/data"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const SliderServices = () => {
    return (
        <>
        
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
            pagination={{ clickable: true }}            
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px] mt-11 "
        >{serviceData.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="flex px-6 py-6 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(11,98,90)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(11,98,90)] transition-all duration-300 border-secondary border-2">
                    <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
                    <div>
                        <h3 className="mb-4 text-lg">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                    </div>
                </div>
            </SwiperSlide>))}

            

        </Swiper >
        </>

    )
}

export default SliderServices 