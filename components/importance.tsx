"use client"

import { useState } from "react";

import Container from "@/components/container";

const Importance = () => {

    return (
        <div className="lg:pb-10">
            <Container >
                <div className="text-center w-full flex relative flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 xl:space-y-10 text-textColor px-7 sm:px-10 md:px-20">
                    <h2 className="font-black text-md md:text-lg xl:text-2xl uppercase drop-shadow-sm">ELEVATE YOUR HEALTH, EMPOWER THE EARTH</h2>
                    <p className="text-justify md:text-center hyphens-auto md:text-xl leading-7 md:leading-8">Embrace a healthier future with our plant-based milk. Nourishing your well-being and the planet, it's a delicious alternative that's ethically produced, environmentally friend&shy;ly, and packed with essential nutrients. Elevate your health while empowering the Earth. </p>
                </div>
            </Container>
        </div>
    )
}

export default Importance;
