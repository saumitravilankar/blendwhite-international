"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'

import Container from "@/components/container"

const item = {
    exit: {
        translateX: "100vw",
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}

export const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className="absolute top-4 w-full max-w-screen z-50">
            <Container>
                <div className="hidden lg:flex mx-4 bg-slate-50 capitalize items-center py-3 justify-between rounded-md relative z-10 lg:px-12">
                    <Link onClick={() => setOpen(false)} className="text-lg text-black font-semibold drop-shadow-xl cursor-pointer" href={'/'}>
                        <div className="max-w-[180px]">
                            <Image src={'/BLENDWHITE_PNG.png'} alt="Blendwhite Logo" width={4500} height={1500} layout="responsive" />
                        </div>
                    </Link>
                    <div className="flex items-center space-x-8">
                        <Link onClick={() => setOpen(false)} className="text-lg text-black font-semibold drop-shadow-xl cursor-pointer" href={'/'}>Home</Link>
                        <Link onClick={() => setOpen(false)} className="text-lg text-black font-semibold drop-shadow-xl cursor-pointer" href={'/about'}>About</Link>
                        <Link onClick={() => setOpen(false)} className="text-lg text-black font-semibold drop-shadow-xl cursor-pointer" href={'/recipes'}>Recipes</Link>
                        <Link onClick={() => setOpen(false)} className="text-lg text-black font-semibold drop-shadow-xl cursor-pointer" href={'/contact'}>Contact</Link>
                    </div>
                </div>
                <div className="max-w-screen bg-slate-50 p-2 mx-2 sm:mx-4 flex justify-between items-center lg:hidden relative">
                    <Link href={'/'} className="max-w-[180px] sm:max-w-[200px]">
                        <Image src={'/BLENDWHITE_PNG.png'} alt="Blendwhite Logo" width={4500} height={1500} layout="responsive" />
                    </Link>
                    <div className="transition-all duration-1000" onClick={() => setOpen(!open)}>
                        {open ?
                            <X className="w-8 h-8" />
                            :
                            <Menu className="w-8 h-8" />
                        }
                    </div>
                    <AnimatePresence>
                        {open &&
                            <motion.div
                                variants={item}
                                exit="exit"
                                initial={{ translateX: "100vw", opacity: 0 }}
                                animate={{ translateX: "0vw", opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-full left-0 w-full min-h-max bg-slate-50 bg-opacity-90 flex flex-col items-end justify-around px-5 pt-5 gap-4 border-t">
                                <Link onClick={() => setOpen(false)} className="text-xl text-black font-semibold drop-shadow-xl cursor-pointer border-b w-full text-end pb-2" href={'/'}>Home</Link>
                                <Link onClick={() => setOpen(false)} className="text-xl text-black font-semibold drop-shadow-xl cursor-pointer border-b w-full text-end pb-2" href={'/about'}>About</Link>
                                <Link onClick={() => setOpen(false)} className="text-xl text-black font-semibold drop-shadow-xl cursor-pointer border-b w-full text-end pb-2" href={'/recipes'}>Recipes</Link>
                                <Link onClick={() => setOpen(false)} className="text-xl text-black font-semibold drop-shadow-xl cursor-pointer border-b w-full text-end pb-5" href={'/contact'}>Contact</Link>
                            </motion.div>}
                    </AnimatePresence>
                </div>
            </Container>
        </nav>
    )
}