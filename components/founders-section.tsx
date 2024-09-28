import Image from "next/image";

import { Founders as FoundersData } from "@/constants";
import Container from "@/components/container"

const Founders = () => {
    return (
        <div className="pt-8 sm:pt-12 lg:py-16">
            <Container>
                <div className="text-center w-full text-textColor space-y-5 sm:space-y-8 lg:space-y-14">
                    {/* <h1 className="text-3xl md:text-5xl xl:text-7xl uppercase font-black drop-shadow-sm px-4">Meet Our Founders</h1> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center auto-cols-auto gap-x-6 gap-y-8 md:gap-y-12 px-6 max-lg:py-4">
                        {
                            FoundersData.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-col items-center gap-2 lg:gap-4 justify-center w-full auto-cols-auto">
                                        <Image className="max-w-[250px] lg:max-w-xs rounded-full" src={'/emp.jpg'} alt="" width={1000} height={1000} layout="responsive" />
                                        <h1 className="font-black text-md md:text-lg xl:text-2xl uppercase drop-shadow-sm">Mr. Vedang Joshi</h1>
                                        <p>Founder & Managing Director</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Founders;