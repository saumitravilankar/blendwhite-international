'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Image from "next/image";
import { cn } from '@/lib/utils';

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { RecipeBowls } from '@/constants';

const RecipesList = () => {

    const router = useRouter();

    const [hoverStates, setHoverStates] = useState(Array(RecipeBowls.length).fill(false));

    const handleMouseEnter = (index: number) => {
        const updatedHoverStates = Array(RecipeBowls.length).fill(false);
        updatedHoverStates[index] = true;
        setHoverStates(updatedHoverStates);
    };

    return (
        <div className="pt-40 pb-20 px-5 lg:py-40">
            <Container>
                <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center text-textColor">
                    <h1 className="section-title">Our Recipes</h1>
                    <h2 className="section-tagline">Empowering Change Through Plant-Based Goodness</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center mt-12 lg:mt-16 mx-6 gap-x-6 gap-y-14 lg:gap-y-20">
                        {RecipeBowls.map((bowl, index) => (
                            <div key={index} className="space-y-5 lg:space-y-6 flex flex-col items-center justify-center text-center"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => setHoverStates(Array(RecipeBowls.length).fill(false))}
                            >
                                <div className={cn("min-w-[150px] sm:max-w-[300px] transition-all duration-500", hoverStates[index] ? "rotate-90 drop-shadow-3xl" : "drop-shadow-xl")}>
                                    <Image src={bowl.src} alt="" width={1413} height={1413} layout="responsive" />
                                </div>
                                <p className="text-2xl font-black uppercase">{bowl.title}</p>
                                <p className=" line-clamp-3 text-justify sm:w-4/5 leading-6 hyphens-auto" style={{ textAlignLast: "center" }}>{bowl.info}</p>
                                <Button onClick={() => router.push(`/recipes/${bowl.id}`)} size={"sm"}>Read More</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default RecipesList;