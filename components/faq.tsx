import Container from "@/components/container";
import FaqAccordian from "@/components/accordian/faq-accordian";

const FAQ = () => {
    return (
        <div className="py-10 sm:py-20">
            <Container>
                <div className="text-start w-full flex relative flex-col items-start space-y-2 sm:space-y-4 md:space-y-5 xl:space-y-6  text-textColor px-7 sm:px-10 md:px-20">
                    <h1 className="text-3xl md:text-5xl xl:text-7xl uppercase font-black drop-shadow-sm">Frequently Asked Questions</h1>
                    <p className="text-justify md:text-start hyphens-auto md:text-xl">Your Questions, Our Answers</p>
                    <div className="min-w-full">
                        <FaqAccordian />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FAQ;