import Image from "next/image";
import Link from "next/link";
import { Home, Phone, Facebook, Twitter, Instagram, LinkedinIcon, Mail } from 'lucide-react'

import Container from "@/components/container";

const Footer = () => {
    return (
        <div className="flex items-center bg-slate-50 py-14">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-sm:gap-y-8 gap-y-4 gap-x-4 justify-center items-start mx-6">
                    <div className="flex justify-center items-center">
                        <Image className="max-w-[200px] md:max-w-xs shrink-0" src={'/BLENDWHITE_PNG.png'} alt="blendwhite logo" width={4500} height={1500} layout="responsive" />
                    </div>
                    <div className="flex lg:flex-col gap-4 justify-center col-span-1 items-center ">
                        <Link href={'/'}><Facebook className="w-6 h-6 sm:w-7 sm:h-7"/></Link>
                        <Link href={'/'}><Instagram className="w-6 h-6 sm:w-7 sm:h-7"/></Link>
                        <Link href={'/'}><Twitter className="w-6 h-6 sm:w-7 sm:h-7"/></Link>
                        <Link href={'/'}><LinkedinIcon className="w-6 h-6 sm:w-7 sm:h-7"/></Link>
                    </div>
                    <div className="flex sm:flex-col gap-4 justify-center items-center text-sm sm:text-lg">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/receipes'}>Recipes</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                    <div className="text-center sm:text-start space-y-4 lg:col-span-2">
                        <div className="flex max-sm:justify-center items-center space-x-2 sm:space-x-5">
                            <div className="font-light w-6 h-6">
                                <Home />
                            </div>
                            <p className="text-sm sm:text-lg font-regular">Minar Apartment, Law College Rd, opp. Film & Television Institute, Pune, Maharashtra 411004</p>
                        </div>
                        <div className="flex max-sm:justify-center items-center space-x-3 sm:space-x-5">
                            <div className="font-light w-6 h-6">
                                <Phone />
                            </div>
                            <Link className="text-sm sm:text-lg font-regular" href={'tel:+917499723147'}>+91 74997 23147</Link>
                        </div>
                        <div className="flex max-sm:justify-center items-center space-x-3 sm:space-x-5">
                            <div className="text-3xl">
                                &copy;
                            </div>
                            <p className="text-sm sm:text-lg font-regular w-max">
                                Blendwhite Internation Pvt. Ltd. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;