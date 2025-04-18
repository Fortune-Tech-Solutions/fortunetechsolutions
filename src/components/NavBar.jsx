import { Link } from "react-scroll";
import ThemeSelector from "./ThemeSelector";
import { useContext, useState } from "react";
import Headroom from "react-headroom";
import fhttransparentblack from "../assets/logo/FTS Light2.png"
import fhttransparentwhite from "../assets/logo/FTS Dark2.png"
import { useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const NavBar = () => {

    const { darkTheme } = useContext(ThemeContext);

    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onPinChange = () => {
        setIsFixed(true)
    }
    const onUnfixChange = () => {
        setIsFixed(false)
    }

    const handleChangeMenu = () => {
        setIsMenuOpen(prev => !prev)
        console.log("clicked");

    }


    useEffect(() => {
        isMenuOpen ?
            document.body.style.overflow = "hidden" :
            document.body.style.overflow = "visible"
    }, [isMenuOpen]);



    return (
        <Headroom onPin={onPinChange} onUnfix={onUnfixChange} pin={isMenuOpen ? true : false}>

            <div className={`
                ${darkTheme ? "border-b" : ""} border-b-black border-b h-[100lvh] fixed w-full transition-all duration-150 ease-in z-30
                ${isMenuOpen ? "opacity-100 -translate-y-0" : "translate-y-full duration-500 opacity-0 border-b-transparent"}
                `}>
                <ul className={`menu text-base-content min-h-full w-full p-4 relative translate-y-16 overflow-x-hidden items-center`}>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[150ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><Link onClick={handleChangeMenu} to='section0' smooth={true} className='rounded text-2xl py-5' offset={-100} >Home</Link></li>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[250ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><Link onClick={handleChangeMenu} to='section1' smooth={true} className='rounded text-2xl py-5'>About Us</Link></li>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[350ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><Link onClick={handleChangeMenu} to='section2' smooth={true} className='rounded text-2xl py-5' offset={-20} >Services</Link></li>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[450ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><Link onClick={handleChangeMenu} to='section3' smooth={true} className='rounded text-2xl py-5'>Projects</Link></li>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[550ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><Link onClick={handleChangeMenu} to='section4' smooth={true} className='rounded text-2xl py-5'>Pricing</Link></li>
                    <li className={`transition-all ${isMenuOpen ? "duration-500 delay-[650ms] opacity-100 translate-x-0" : "opacity-0 duration-0 translate-x-full"}`}><Link onClick={handleChangeMenu} to='section5' smooth={true} className='rounded text-2xl py-5' offset={-10} >Contacts</Link></li>
                </ul>
            </div>

            <div className={`
                    navbar h-4 bg-base-100 z-40 relative duration-500 transition-all
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
                    <label
                        // htmlFor="my-drawer-4" 
                        className="relative"
                    >
                        {/* <input type="checkbox" value={isMenuOpen} onChange={handleChangeMenu} /> */}

                        {/* burger icon */}
                        <svg className={`w-11 h-11 py-1 ml-1 transition-all duration-300 absolute ${isMenuOpen ? "opacity-0" : "rotate-180 opacity-100"} `} onClick={handleChangeMenu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>

                        {/* close icon */}
                        <svg className={`w-11 h-11 py-1 ml-1 transition-all duration-300 absolute ${isMenuOpen ? "rotate-180 opacity-100" : "opacity-0"} `} onClick={handleChangeMenu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>

                        <svg className={`w-11 h-11 py-1 ml-1 opacity-0 cursor-pointer`} onClick={handleChangeMenu} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
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
                    <ThemeSelector />
                </div>
            </div>

        </Headroom>
    );
}

export default NavBar;
