import About from "@/components/About";
import ContactMap from "@/components/contact-map";
import FAQ from "@/components/faq";
import Feedback from "@/components/feedbacks";
import Founders from "@/components/founders-section";
import HomePageIntro from "@/components/homepage-intro";

const AboutPage = () => {
    return (
        <>
            <HomePageIntro />
            <About />
            <Founders />
            <FAQ />
            <Feedback />
            <ContactMap />
        </>
    )
}

export default AboutPage;