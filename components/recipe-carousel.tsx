"use client"

import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { cn } from '@/lib/utils';

import { RecipeBowls } from "@/constants";
import { Button } from "@/components/ui/button";
import '@/styles/recipe-carousel.css'

const RecipeCarousel = () => {

    const router = useRouter();

    const [hoverStates, setHoverStates] = useState(Array(RecipeBowls.length).fill(false));

    const handleMouseEnter = (index: number) => {
        const updatedHoverStates = Array(RecipeBowls.length).fill(false);
        updatedHoverStates[index] = true;
        setHoverStates(updatedHoverStates);
    };

    return (
        <div className="pt-10 pb-8 sm:pt-20 sm:pb-14 px-6">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 3000,
                }}
                speed={1200}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    1024: {
                        slidesPerView: 2
                    }
                }}
            >
                {RecipeBowls.map((bowl, index) => (
                    <SwiperSlide key={index}>
                        <div key={index} className="space-y-5 lg:space-y-6 flex flex-col items-center justify-center text-center text-textColor"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => setHoverStates(Array(RecipeBowls.length).fill(false))}
                        >
                            <div className={cn("max-w-[250px] sm:max-w-[300px] transition-all duration-500", hoverStates[index] ? "rotate-90 drop-shadow-xl" : "drop-shadow-sm")}>
                                <Image src={bowl.src} alt="" width={1413} height={1413} layout="responsive" />
                            </div>
                            <p className="text-2xl font-black uppercase">{bowl.title}</p>
                            <p className=" line-clamp-3 text-justify sm:w-4/5 leading-6 hyphens-auto" style={{ textAlignLast: "center" }}>{bowl.info}</p>
                            <Button onClick={() => router.push(`/recipes/${bowl.id}`)} size={"sm"}>Read More</Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default RecipeCarousel;