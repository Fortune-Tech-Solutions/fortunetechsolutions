import { Link } from 'react-scroll'
import { useState } from 'react'

const DrawerWrap = ({ children }) => {

    const [isChecked, setisChecked] = useState(false);
    const handleIsCheckedChange = () => {
        setisChecked(isChecked => !isChecked)
    }

    return (
        <div>
            <div className="drawer drawer-start">
                <input id="my-drawer-4" type="checkbox" checked={isChecked} onChange={handleIsCheckedChange} className="drawer-toggle" />
                <div className="drawer-content">
                    {children}
                </div>
                <div className="drawer-side md:hidden z-50">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu menu-md bg-base-200 text-base-content min-h-full w-80 p-4">
                        <li><Link onClick={handleIsCheckedChange} to='section0' smooth={true} offset={-100} className='rounded'>Home</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section1' smooth={true} className='rounded'>About Us</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section2' smooth={true} offset={-20} className='rounded'>Services</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section3' smooth={true} className='rounded'>Projects</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section4' smooth={true} className='rounded'>Pricing</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section5' smooth={true} offset={-10} className='rounded'>Contacts</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default DrawerWrap;
