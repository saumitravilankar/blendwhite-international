"use client"

import Image from 'next/image';
import Link from 'next/link';

import Container from "@/components/container";
import { Button } from '@/components/ui/button';
import CanvasComponent from '@/components/canvas-component';

const OurProducts = () => {
    return (
        <div className="py-10 md:pt-20">
            <Container>
                <div className="text-center w-full flex relative flex-col items-center text-textColor px-7 sm:px-10 md:px-20" >
                    <div className='flex flex-col space-y-6 sm:space-y-7 md:space-y-8 xl:space-y-10'>
                        <h1 className="text-3xl md:text-5xl xl:text-7xl uppercase font-black drop-shadow-xl">Our Products</h1>
                        <div className='space-y-1 md:space-y-3'>
                            <h2 className="font-black text-xs md:text-lg xl:text-2xl uppercase drop-shadow-sm">Explore and Shop Our Plant-Powered Selection</h2>
                            <p className="text-center hyphens-auto text-xs md:text-xl leading-6 md:leading-8">Pure Goodness, Cultivated Sustainably, Available for Purchase</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-10 gap-y-8 lg:gap-y-4'>
                        <div className='w-full h-auto'>
                            <div className='w-full h-[50vh] lg:h-[70vh] relative'>
                                <CanvasComponent />
                                <div className='absolute select-none top-10 sm:top-20 bottom-auto left-5 right-auto rounded-lg bg-slate-900 p-1 sm:p-2 drop-shadow-2xl'>
                                    <p className='font-normal text-[10px] uppercase text-white'>3D View</p>
                                </div>
                            </div>
                            <div className='w-full space-y-4 flex flex-col items-center select-none'>
                                <h1 className='font-black text-xl md:text-3xl lg:text-4xl drop-shadow-xl'>Plain Cashew</h1>
                                <div className='flex items-center justify gap-4'>
                                    <Image className='drop-shadow-xl' src={'/cashew_icon.png'} alt='plain cashew' width={24} height={24} />
                                </div>
                                <p className="text-center text-sm md:text-lg font-normal md:w-4/5 leading-6 md:leading-8 line-clamp-3">Dive into the creamy world of our dairy-free cashew milk, the perfect partner on your plant-based journey. It's a flavour-packed delight, blending nature's cashews into a rich, satisfying alternative to regular dairy. Each sip offers a delicious taste of wholesome goodness, nourishing both body and soul.</p>
                                <div className='flex items-center gap-6'>
                                    <Button size={"sm"}><Link className='font-bold' href={'/cashew_milk'}>Know More</Link></Button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-auto'>
                            <div className='w-full h-[50vh] lg:h-[70vh] relative'>
                                <CanvasComponent />
                                <div className='absolute select-none top-10 sm:top-20 bottom-auto left-5 right-auto rounded-lg bg-slate-900 p-1 sm:p-2 drop-shadow-2xl'>
                                    <p className='font-normal text-[10px] uppercase text-white'>3D View</p>
                                </div>
                            </div>
                            <div className='w-full space-y-4 flex flex-col items-center select-none'>
                                <h1 className='font-black text-xl md:text-3xl lg:text-4xl drop-shadow-xl'>Banana-Cashew</h1>
                                <div className='flex items-center justify gap-4'>
                                    <Image className='drop-shadow-xl' src={'/banana.png'} alt='plain cashew' width={24} height={24} />
                                    <Image className='drop-shadow-xl' src={'/cashew_icon.png'} alt='plain cashew' width={24} height={24} />
                                </div>
                                <p className="text-center text-sm md:text-lg font-normal md:w-4/5 leading-6 md:leading-8 line-clamp-3">Transport your taste buds to a tropical paradise with our luxurious Cashew Milk Flavoured Banana, a dairy-free indulgence infused with a delightful fruity twist! We've artfully crafted this creamy concoction to deliver the perfect blend of luscious cashew goodness and the sun-kissed sweetness of ripe bananas.</p>
                                <div className='flex items-center gap-6'>
                                    <Button size={"sm"}><Link className='font-bold' href={'/banana_cashew_milk'}>Know More</Link></Button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-auto'>
                            <div className='w-full h-[50vh] lg:h-[70vh] relative'>
                                <CanvasComponent />
                                <div className='absolute select-none top-10 sm:top-20 bottom-auto left-5 right-auto rounded-lg bg-slate-900 p-1 sm:p-2 drop-shadow-2xl'>
                                    <p className='font-normal text-[10px] uppercase text-white'>3D View</p>
                                </div>
                            </div>
                            <div className='w-full space-y-4 flex flex-col items-center select-none'>
                                <h1 className='font-black text-xl md:text-3xl lg:text-4xl drop-shadow-xl'>Coffee-Cashew</h1>
                                <div className='flex items-center justify gap-4'>
                                    <Image className='drop-shadow-xl' src={'/coffee-beans.png'} alt='plain cashew' width={24} height={24} />
                                    <Image className='drop-shadow-xl' src={'/cashew_icon.png'} alt='plain cashew' width={24} height={24} />
                                </div>
                                <p className="text-center text-sm md:text-lg font-normal md:w-4/5 leading-6 md:leading-8 line-clamp-3">Get ready to embark on a sensory adventure like no other with our Coffee Cashew Milk. It's a magical blend of robust coffee and velvety cashew creaminess that's designed to awaken your senses. This exquisite concoction serves as your ticket to an extraordinary dairy-free coffee experience that will completely redefine your relationship with caffeine.</p>
                                <div className='flex items-center gap-6'>
                                    <Button size={"sm"}><Link className='font-bold' href={'/coffee_cashew_milk'}>Know More</Link></Button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-auto'>
                            <div className='w-full h-[50vh] lg:h-[70vh] relative'>
                                <CanvasComponent />
                                <div className='absolute select-none top-10 sm:top-20 bottom-auto left-5 right-auto rounded-lg bg-slate-900 p-1 sm:p-2 drop-shadow-2xl'>
                                    <p className='font-normal text-[10px] uppercase text-white'>3D View</p>
                                </div>
                            </div>
                            <div className='w-full space-y-4 flex flex-col items-center select-none'>
                                <h1 className='font-black text-xl md:text-3xl lg:text-4xl drop-shadow-xl'>Fig-Cashew</h1>
                                <div className='flex items-center justify gap-4'>
                                    <Image className='drop-shadow-xl' src={'/fig.png'} alt='plain cashew' width={24} height={24} />
                                    <Image className='drop-shadow-xl' src={'/cashew_icon.png'} alt='plain cashew' width={24} height={24} />
                                </div>
                                <p className="text-center text-sm md:text-lg font-normal md:w-4/5 leading-6 md:leading-8 line-clamp-3">Treat yourself to the irresistible allure of Fig Cashew Milk—a tantalizing fusion of nutty richness and fruity delight, offering a dairy-free indulgence packed with wholesome goodness! This exquisite concoction is a symphony of flavours that will captivate your taste buds and nourish your body.</p>
                                <div className='flex items-center gap-6'>
                                    <Button size={"sm"}><Link className='font-bold' href={'/fig_cashew_milk'}>Know More</Link></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurProducts;