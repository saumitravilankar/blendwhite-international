
import Container from "@/components/container";

const Recipes = () => {
    return (
        <div className="pt-10 md:pt-20">
            <Container>
                <div className="text-center w-full flex relative flex-col items-center text-textColor px-7 sm:px-10 md:px-20">
                    <div className='flex flex-col space-y-6 sm:space-y-7 md:space-y-8 xl:space-y-10'>
                        <h1 className="text-3xl md:text-5xl xl:text-7xl uppercase font-black drop-shadow-sm">Nature's Kitchen Alchemy</h1>
                        <div className='space-y-1 md:space-y-3'>
                            <h2 className="font-black text-xs md:text-lg xl:text-2xl uppercase drop-shadow-sm">Explore and Shop Our Plant-Powered Selection</h2>
                            <p className="text-center hyphens-auto text-xs  md:text-xl leading-7 md:leading-8">Pure Goodness, Cultivated Sustainably, Available for Purchase</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Recipes;