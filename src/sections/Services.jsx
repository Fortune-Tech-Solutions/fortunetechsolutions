import Typewriter from "typewriter-effect";
import marketingGraphics from "../assets/marketing.png"

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row items-center space-x-2 text-center mb-8">
                <h2 className="text-2xl font-bold">What does FTS offer?</h2>
                <span className="text-xl text-base-content/75">Everything you need to build great products.</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div
                    className="card card-bordered border-base-content/75 max-w-md w-full py-8 md:px-4 rounded relative"
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
                        <div className="bg-[#262626] dark:text-base-content text-base-100 flex justify-center px-4 py-16">Hello World!</div>
                    </div>
                    <div className="mockup-phone absolute border scale-[0.2] top-[-70px] right-[-90px] md:scale-[0.3] md:top-[-115px] md:right-[-70px] shadow-xl">
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

                    <div className="card-body pb-0">
                        <h3 className="text-xl font-bold card-title">Website Solutions</h3>
                        <p className="text-sm text-base-content/75">- Landing Page</p>
                        <p className="text-sm text-base-content/75">- Custom Website Design</p>
                        <p className="text-sm text-base-content/75">- Ecommerce</p>
                        <p className="text-sm text-base-content/75">- Web App</p>
                    </div>
                </div>



                <div
                    className="card card-bordered border-base-content/75 max-w-md w-full py-8 md:px-4 rounded relative"
                >
                    {/* <div className="bg-base-content/10 p-2 md:h-[206px] w-full rounded relative flex justify-center">
                        <div className="stats stats-vertical md:absolute md:-left-20 md:-top-5 md:translate-y-1/2 md:scale-[0.65] rounded md:stats-horizontal border border-base-content/10">
                            <div className="stat place-items-center">
                                <div className="stat-title">Sales</div>
                                <div className="stat-value">$ 31K</div>
                                <div className="stat-desc">From January 1st to February 1st</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">Users</div>
                                <div className="stat-value text-secondary">4,200</div>
                                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title">New Registers</div>
                                <div className="stat-value">1,200</div>
                                <div className="stat-desc">↗︎ 90 (14%)</div>
                            </div>
                        </div>
                    </div> */}
                    <figure>
                        <img src={marketingGraphics} alt="marketing graphics" className="rounded border border-black dark:border-base-content/10" />
                    </figure>

                    <div className="card-body pb-0">
                        <h3 className="text-xl font-bold card-title">Marketing</h3>
                        <p className="text-sm text-base-content/75">You don&apos;t know marketing. But we know!</p>
                        <p className="text-sm text-base-content/75">- CRM setup</p>
                        <p className="text-sm text-base-content/75">- Phone system setup</p>
                        <p className="text-sm text-base-content/75">- Automation</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
