import { Link } from "react-scroll";
import ThemeSelector from "./ThemeSelector";
import { useState } from "react";
import Headroom from "react-headroom";
import fhttransparentblack from "../assets/logo/FTS Light2.png"
import fhttransparentwhite from "../assets/logo/FTS Dark2.png"

const NavBar = () => {

    const [darkTheme, setDarkTheme] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const onPinChange = () => {
        setIsFixed(true)
    }
    const onUnfixChange = () => {
        setIsFixed(false)
    }

    return (
        <Headroom onPin={onPinChange} onUnfix={onUnfixChange}>

            <div className={`
                    navbar h-4 bg-base-100 z-40 relative duration-1000 transition-shadow
                    ${!darkTheme && (isFixed && "shadow")}
                        `}>

                <div className={`
                        absolute left-0 bottom-0 flex justify-center w-full overflow-hidden duration-1000 transition-transform
                        ${!darkTheme && "hidden"} 
                        ${darkTheme && (isFixed ? "scale-y-10" : "scale-y-0")} 
                            `}>
                    <div className="bg-base-300 h-[2px] sm:h-[1px] w-full" />
                </div>

                <div className="navbar-start hidden md:flex">
                    <Link to='section0' smooth={true} offset={-100} className="btn btn-link text-2xl no-underline hover:no-underline text-inherit" >
                        {/* fts. */}
                        {
                            darkTheme ?
                                <img alt="FHT logo" src={fhttransparentwhite} className="h-12 w-12" />
                                :
                                <img alt="FHT logo" src={fhttransparentblack} className="h-12 w-12" />
                        }
                    </Link>
                </div>


                <div className='navbar-center hidden md:block'>
                    <Link to='section1' smooth={true} className='btn btn-ghost btn-primary rounded-sm'>About Us</Link>
                    <Link to='section2' smooth={true} offset={-40} className='btn btn-ghost btn-primary rounded-sm'>Services</Link>
                    <Link to='section3' smooth={true} className='btn btn-ghost btn-primary rounded-sm'>Projects</Link>
                    <Link to='section4' smooth={true} className='btn btn-ghost btn-primary rounded-sm'>Pricing</Link>
                    <Link to='section5' smooth={true} className='btn btn-ghost btn-primary rounded-sm'>Contacts</Link>
                </div>


                <div className="navbar-start md:hidden">
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost rounded btn-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                </div>

                <div className="navbar-center md:hidden">
                    <Link to='section0' smooth={true} offset={-100} className="btn btn-link text-2xl no-underline hover:no-underline text-inherit" >
                    {/* fts. */}
                        {
                            darkTheme ?
                                <img alt="FHT logo" src={fhttransparentwhite} className="h-12 w-12" />
                                :
                                <img alt="FHT logo" src={fhttransparentblack} className="h-12 w-12" />
                        }
                    </Link>
                </div>


                <div className="navbar-end">
                    <ThemeSelector setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                </div>
            </div>

        </Headroom>
    );
}

export default NavBar;
