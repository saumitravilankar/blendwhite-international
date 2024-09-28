
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import Container from "@/components/container"

interface YouMayAlsoLikeProps {
    productsToShow : Array<{src: string; name: string, knowMore: string}>
}

const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = ({productsToShow}) => {
    return (
        <div className="pt-5 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-32">
            <Container>
                <h1 className="font-black text-textColor max-md:text-center md:ml-6 text-3xl md:text-4xl lg:text-5xl lg:px-4">You May Also Like ,</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    {productsToShow.map((item, index) => {
                        return (
                            <div className="text-center flex flex-col gap-2" key={index}>
                                <div className="flex justify-center items-center">
                                    <Image className="max-w-[150px] sm:max-w-[250px] lg:max-w-xs" src={item.src} alt="" width={300} height={300} layout="responsive" />
                                </div>
                                <p className="font-black text-md sm:text-xl text-textColor tracking-wide">{item.name}</p>
                                <div>
                                    <Button size={"sm"} variant={"default"}>
                                        <Link className="w-fit max-sm:text-xs" href={item.knowMore}>Know More</Link>
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default YouMayAlsoLike;