import { Link } from "react-scroll";
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <>
            <div id="section0" className="hero h-[calc(100svh-4rem)]">

                <div className="hero-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl font-bold">Your business deserve modern solutions.</h1>
                        <p className="py-6 text-lg text-base-content/80">
                            FTS helps your business using modern tools for a faster and efficient way to work,
                            brought to you by the experts in the industry.
                        </p>
                        <Link to='section2' smooth={true} ><motion.button whileTap={{ scale: 0.95 }} className="btn btn-accent rounded">Explore Our Services</motion.button></Link>
                    </div>
                </div>


            </div>
        </>

    );
}

export default Hero;
