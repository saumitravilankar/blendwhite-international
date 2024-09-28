"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import '@/styles/feedback-carousel.css'
import { Feedbacks } from '@/constants';
import Container from "@/components/container";

const Feedback = () => {
    return (
        <div className="py-20 lg:py-32 w-full bg-feedback-background bg-no-repeat bg-cover bg-top bg-fixed relative">
            <div className='absolute w-full h-full top-0 bg-slate-900 bg-opacity-70 lg:py-10' />
            <Container>
                <div className='h-full space-y-10 lg:space-y-16'>
                    <div className='relative z-10 w-full flex justify-center items-center'>
                        <Image className='max-w-[150px] lg:max-w-[200px]' src={'/quote-new.png'} alt='' width={791} height={615} layout='responsive' />
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={100}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                        }}
                        speed={1200}
                        loop
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="custom-swiper"
                    >
                        {Feedbacks.map((feedback) => (
                            <SwiperSlide key={feedback.name}>
                                <div key={feedback.name} className='text-center text-white text-xl lg:text-2xl leading-8 lg:leading-10 tracking-wide select-none px-10'>
                                    <p>{feedback.comment}</p>
                                    <p className='pt-3'>- {feedback.name}</p>
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default Feedback;