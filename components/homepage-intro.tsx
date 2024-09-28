import Container from "@/components/container";
import Image from "next/image";

const HomePageIntro = () => {
    return (
        <div className="py-28 lg:py-40 bg-about-wallpaper bg-center bg-no-repeat bg-cover">
            <Container>
                <div className="flex flex-col gap-2 lg:gap-6 items-center justify-center text-textColor px-6 py-8">
                    <div className="">
                        <Image className="max-w-xs sm:max-w-xl lg:max-w-4xl" src={'/BLENDWHITE_PNG.png'} alt="blendwhite logo" width={4500} height={1500} layout="responsive" />
                    </div>
                    <div className="p-6">
                        <p className="text-justify sm:text-center hyphens-auto text-md sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-9 font-semibold">Welcome to Blendwhite International Pvt Limited, where we've unlocked the gateway to a world brimming with innovation and creamy vegan milk! Born in 2023, our mission is clear: we're on a flavorful journey to revolutionize how you enjoy plant-based alternatives. Brace yourself for a tantalizing adventure in crafting top-tier, eco-friendly, and utterly scrumptious vegan milk delights!
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomePageIntro;