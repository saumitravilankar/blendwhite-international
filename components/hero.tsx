"use client"

import { Button } from "@/components/ui/button";
import Container from "@/components/container";
import { useRouter } from "next/navigation";

const Hero = () => {

    const router = useRouter();

    return (
        <div className="bg-hero-image bg-cover bg-center bg-no-repeat overflow-hidden">
            <Container>
                <div className="relative z-10 flex items-center justify-start min-h-screen sm:w-3/5 lg:w-3/5 lg:pt-20">
                    <div className="space-y-4 sm:space-y-8 pl-5 sm:pl-10">
                        <h1 className="text-3xl max-md:drop-shadow-xl max-md:w-4/5 max-md:leading-10 md:text-5xl xl:text-7xl uppercase text-white font-black lg:leading-snug">India's Innovative Plant-Based Milk </h1>
                        <h2 className="text-md max-md:drop-shadow-xl max-md:w-4/5 max-md:leading-8 md:text-lg xl:text-2xl uppercase text-primaryColor font-bold lg:leading-snug">Plant-Based Goodness for a Sustainable Future</h2>
                        <p className="text-sm max-md:drop-shadow-xl max-md:w-4/5 max-md:leading-6 md:text-md xl:text-xl font-normal text-white  lg:leading-snug">sustainable innovation for your well-being and our planet. Discover the pure essence of goodness in every sip, supporting a greener tomorrow.</p>
                        <Button onClick={() => router.push('/about')} size={"sm"}>Know More</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero;