import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [navBackground, setNavBackground] = useState(false);

    const NavLinks = [
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    const handleScroll = () => {
        if (window.scrollY > 50) { 
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full fixed top-0 left-0 z-10 transition-all duration-500 ease-in ${navBackground ? 'bg-gray-900' : 'bg-transparent'}`}>
            <div className="md:flex items-center md:mx-64 justify-between py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
                    <Link to="about"  spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} className="text-4xl mr-1 pt-2 customFont tracking-widest">JNT</Link> 
                </div>
                <div onClick={() => setOpenMenu(!openMenu)} className='text-3xl absolute right-8 top-6 text-white cursor-pointer md:hidden'>
                    <FontAwesomeIcon icon={openMenu ? faXmark : faBars} />
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-15 text-center absolute md:static md:z-auto z-[-1] 
                                left-0 top-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${openMenu ? 'top-20 bg-white':'top-[-490px]'}`}>

                    {NavLinks.map((link, index) => (
                        <li key={index} className='md:ml-8 xs:my-2 md:my-0 my-7 font-sans cursor-pointer'>
                            <Link 
                                to={link.to} 
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300}
                                className={`md:text-lg hover:text-xl hover:transition-all duration-500 ease-in ${openMenu ? 'text-black font-medium':'text-white'}`}
                                onClick={() => setOpenMenu(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
