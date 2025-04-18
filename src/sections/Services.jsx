import Typewriter from "typewriter-effect";
import marketingGraphics from "../assets/marketing.png"
// import { RiComputerLine } from "react-icons/ri";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa";
// import { HiLightBulb } from "react-icons/hi";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
// import { Link } from "react-scroll"

const Services = () => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row items-center space-x-2 text-center mb-8">
                <h2 className="text-2xl font-bold">What does FTS offer?</h2>
                <span className="text-xl text-base-content/75">Everything you need to build great products.</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div
                    className={`card card-bordered border-base-content/75 max-w-md w-full py-8 md:px-4 rounded group relative hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl duration-300 active:translate-y-0 active:shadow-none ${darkTheme ? "hover:shadow-white/15" : ""}`}
                >
                    <div className="mockup-browser bg-black max-w-xs lg:max-w-sm mx-auto border border-base-content/10 rounded overflow-visible">
                        <div className="mockup-browser-toolbar text-white">
                            <div className="input text-base-content">
                                <Typewriter
                                    options={{
                                        strings: ['https://www.yoursite.com'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="bg-[#262626] dark:text-base-content text-base-100 flex justify-center px-4 py-16">Welcome</div>
                    </div>
                    <div className="mockup-phone absolute border scale-[0.2] top-[-85px] right-[-90px] md:scale-[0.23] md:top-[-95px] lg:scale-[0.3] shadow-xl">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo bg-[#262626] phone-1 relative">
                                <div className="mockup-browser w-96 bg-[#262626] absolute top-5 flex flex-col justify-center items-center">
                                    <div className="mockup-browser-toolbar -translate-x-20 bg-[#262626]">
                                        <div className="input translate-x-10 translate-y-3">
                                            <Typewriter
                                                options={{
                                                    strings: ['https://www.yoursite.com'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="artboard artboard-demo bg-[#262626] phone-1 relative">
                                        <span className="text-center text-base-100 dark:text-base-content text-3xl absolute top-44 w-52">Mobile Responsive</span>
                                        <div className="absolute bg-base-200 bottom-16 flex justify-between items-center px-8 h-14 w-full">
                                            <div>
                                                <svg className="w-10 h-10 p-1 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6H6m12 4H6m12 4H6m12 4H6" />
                                                </svg>
                                            </div>
                                            <div>
                                                <svg className="w-10 h-10 p-1 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
                                                </svg>

                                            </div>
                                            <div><svg className="w-10 h-10 p-1 text-primary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                                            </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body pb-0 flex items-start justify-start max-w-72">
                        <h3 className="text-xl font-bold card-title max-w-sm w-full">Web Applications Development</h3>
                      

                    </div>


                </div>



                <div
                    className={`card card-bordered border-base-content/75 max-w-md w-full py-8 md:px-4 rounded relative hover:cursor-pointer hover:-translate-y-1 hover:shadow-2xl duration-300 active:translate-y-0 active:shadow-none ${darkTheme ? "hover:shadow-white/15" : ""}`}
                >
                    <figure className="max-w-sm px-2">
                        <img src={marketingGraphics} alt="marketing graphics" className="rounded border border-black dark:border-base-content/10 w-full" />
                    </figure>

                    <div className="card-body pb-0 flex items-start justify-start">
                        <h3 className="text-xl font-bold card-title">Business Intelligence</h3>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-wrap items-center justify-center gap-10 py-8 overflow-hidden">
                <Link to="section5" smooth={true}>
                    <div className="border relative rounded-md p-6 bg-base-200 hover:bg-accent hover:text-primary max-w-xs w-full group cursor-pointer flex flex-col items-center justify-center">
                        <div><RiComputerLine className="text-6xl" /></div>
                        <div className="font-bold text-xl text-center mb-2 mt-6">Web Application Development</div>
                        <div className={`text-base-content/75 group-hover:text-primary/75`}>Custom-built solutions for Landing Pages, Ecommerce, POS systems, and more-fast, scalable, and optimized. Let&apos;s build something great!</div>
                        <div className="absolute bottom-0 bg-accent text-primary p-2 translate-y-10 group-hover:translate-y-6 opacity-0 group-hover:opacity-100 duration-100 border-4 border-base-100 rounded-full"><FaArrowRight className="text-xl" /></div>
                    </div>
                </Link>
                <Link to="section5" smooth={true}>
                    <div className="border relative rounded-md p-6 bg-base-200 hover:bg-accent hover:text-primary max-w-xs w-full group cursor-pointer flex flex-col items-center justify-center">
                        <div><FaPeopleGroup className="text-6xl" /></div>
                        <div className="font-bold text-xl text-center mb-2 mt-6">Marketing</div>
                        <div className={`text-base-content/75 group-hover:text-primary/75`}>Marketing Services Strengthen your brand with SEO, CRM integration, Email automation, AI chatbot, and more. Let&apos;s grow your business efficiently!</div>
                        <div className="absolute bottom-0 bg-accent text-primary p-2 translate-y-10 group-hover:translate-y-6 opacity-0 group-hover:opacity-100 duration-100 border-4 border-base-100 rounded-full"><FaArrowRight className="text-xl" /></div>
                    </div>
                </Link>
                <Link to="section5" smooth={true}>
                    <div className="border relative rounded-md p-6 bg-base-200 hover:bg-accent hover:text-primary max-w-xs w-full group cursor-pointer flex flex-col items-center justify-center">
                        <div><HiLightBulb className="text-6xl" /></div>
                        <div className="font-bold text-xl text-center mb-2 mt-6">Business Intelligence</div>
                        <div className={`text-base-content/75 group-hover:text-primary/75`}>Unlock data-driven insights with advanced analytics, reporting, and visualization to drive smarter decisions. Let&apos;s optimize your strategy!</div>
                        <div className="absolute bottom-0 bg-accent text-primary p-2 translate-y-10 group-hover:translate-y-6 opacity-0 group-hover:opacity-100 duration-100 border-4 border-base-100 rounded-full"><FaArrowRight className="text-xl" /></div>
                    </div>
                </Link>
            </div> */}
        </div>
    );
}

export default Services;
