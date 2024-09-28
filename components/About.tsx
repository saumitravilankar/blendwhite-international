import Image from "next/image";
import Container from "@/components/container";

const About = () => {
    return (
        <div className="pt-10 md:pt-20">
            <Container>
                <div className="text-center w-full flex relative flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 xl:space-y-10  text-textColor px-7 sm:px-10 md:px-20">
                    <h1 className="text-3xl md:text-5xl xl:text-7xl uppercase font-black drop-shadow-sm">About Us</h1>
                    <h2 className="font-black text-md md:text-lg xl:text-2xl uppercase drop-shadow-sm">Empowering Change Through Plant-Based Goodness</h2>
                    <p className="text-justify md:text-center hyphens-auto md:text-xl leading-7 md:leading-8">Welcome to a revolution in dairy consumption! Our plant-based milk is more than a beverage; it's a commitment to your health, the environment, and compassion. Indulge in the creamy richness of milk, sourced purely from plants, and join us in nourishing both your well-being and the planet's future.</p>
                    <div className="w-full">
                        <Image src={'/Without_BG (1).png'} alt="" width={2000} height={1333} layout="responsive" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;