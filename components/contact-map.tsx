import Link from "next/link";
import Container from "./container";

const ContactMap = () => {
    return (
        <div className="py-10 md:py-24">
            <Container >
                <div className="text-start w-full flex relative flex-col sm:flex-row items-start text-textColor px-7 sm:px-10 md:px-14 sm:gap-20">
                    <div className="space-y-4 md:space-y-8 xl:space-y-10 flex-1 text-textColor">
                        <h1 className="text-3xl md:text-5xl xl:text-7xl uppercase font-black drop-shadow-sm">Connect with Us</h1>
                        <h3 className="font-black text-md sm:text-md lg:text-xl uppercase drop-shadow-sm">Let's Talk and Grow Together</h3>
                        <div>
                            <Link className="font-black text-md sm:text-md lg:text-xl uppercase drop-shadow-sm" href={'tel:+917499723147'}>CALL : +91 7499723147</Link>
                        </div>
                        <div className="space-y-2 pb-5 md:pb-10">
                            <h3 className="font-black text-md sm:text-md lg:text-xl uppercase drop-shadow-sm">OFFICE ADDRESS : </h3>
                            <p className="font-light tracking-wide text-sm drop-shadow-sm leading-6 sm:text-md sm:leading-8 lg:text-lg lg:leading-9">Minar Apartment, Law College Rd, opp. Film & Television Institute, Pune, Maharashtra 411004</p>
                        </div>
                    </div>
                    <div className="flex-1 max-sm:min-w-full drop-shadow-xl">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3333674985565!2d73.82619727501563!3d18.513831469380484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb12a6fe48d%3A0x7c5faf18901673bf!2sDynastical%20Communication%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1693646619065!5m2!1sen!2sin" width="100%" height="600" style={{ border: 0, minHeight: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactMap;