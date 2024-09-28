"use client"

import Image from 'next/image';
import { useState } from 'react';

import { ProductData } from '@/constants';
import Container from '@/components/container';

interface ProductPageProps {
    index: number
}

const ProductPage: React.FC<ProductPageProps> = ({ index }) => {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    return (
        <div className=''>
            <Container>
                <div className='flex max-md:flex-col items-center md:items-start justify-center gap-8 2xl:gap-20 pt-40 pb-10 px-10 md:px-6 2xl:px-4'>
                    <div className='flex-1 min-h-full flex flex-col items-center justify-between'>
                        <div className='border w-full'>
                            <Image src={ProductData[index].images[currentImgIndex].src} alt='' width={550} height={550} layout='responsive' />
                        </div>
                        <div className='flex w-full gap-4 justify-between mt-3 sm:mt-6 h-1/5'>
                            {ProductData[index].images.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => setCurrentImgIndex(index)} className='border max-sm:w-14 max-sm:h-14 sm:flex-1 hover:shadow-lg cursor-pointer'>
                                        <Image src={item.src} alt='' width={550} height={550} layout='responsive' />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col h-full justify-center sm:justify-start gap-4 md:gap-6 lg:gap-8 items-center md:items-start text-textColor'>
                        <h1 className='font-black min-w-max max-sm:text-center max-md:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl tracking-wide'>{ProductData[index].name}</h1>
                        <p className='text-justify text-xs lg:text-sm 2xl:text-md leading-6 sm:leading-7 lg:leading-8'>
                            {ProductData[index].info}
                        </p>
                        <div className='grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-4 gap-x-2 gap-y-2 sm:gap-x-5 sm:gap-y-5'>
                            {ProductData[index].tags.map((item, index) => {
                                return (
                                    <div key={index} className='px-4 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 text-xs lg:text-sm bg-textColor text-center lg:font-semibold rounded-full text-white tracking-wider min-w-max'>{item}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage;