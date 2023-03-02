import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.PNG'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-20 mx-auto px-4 sticky z-10 bg-white top-0 shadow-xl">
            <Link to='hero'spy={true} smooth={true} offset={-100} duration={500} >
            <img alt='logo' className="rounded w-14 cursor-pointer" src={Logo}>
            </img>
            </Link>

            <ul className ="hidden sm:flex">
                <li 
                className='font-bold hover:underline decoration-yellow-200 underline-offset-5 p-4 cursor-pointer text-lg'>
                <Link to='mission' spy={true} smooth={true} offset={-100} duration={500}>Mission</Link>
                </li>

                <li 
                className='font-bold hover:underline decoration-yellow-200 underline-offset-5 p-4 cursor-pointer text-lg'>
                     <Link to='founders' spy={true} smooth={true} offset={-100} duration={500}>Founders</Link>
                </li>

                <li 
                className='font-bold  hover:underline decoration-yellow-200 underline-offset-5 p-4 cursor-pointer text-lg'>
                     <Link to='events' spy={true} smooth={true} offset={-100} duration={500}>Events</Link>
                </li>

                <li 
                className='font-bold hover:underline decoration-yellow-200 underline-offset-5 p-4 cursor-pointer text-lg'>
                    <Link to='form' spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                </li>

                <li 
                className='p-4 cursor-pointer border text-white bg-blue-500 hover:bg-blue-600 duration-500 rounded-full hover:animate-pulse text-lg font-bold'> 
                 <Link to='donate' spy={true} smooth={true} offset={-90} duration={500}>Donate</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className="block sm:hidden z-10 cursor-pointer ">
                {nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/> }
            </div>

            {/* Mobile Menu */}
            <div
             className={nav ? 'opacity-90 sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center cursor-pointer ease-in duration-500' : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-500'}>
           
            <ul>
                <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 duration-300 text-blue-400'><Link to='mission' spy={true} smooth={true} offset={-100} duration={500}>Mission</Link></li>

                <li className='p-4 text-4xl hover:text-gray-500 text-blue-400 duration-300'><Link to='founders' spy={true} smooth={true} offset={-100} duration={500}>Founders</Link></li>

                <li className='p-4 text-4xl hover:text-gray-500 text-blue-400 duration-300'><Link to='events' spy={true} smooth={true} offset={50} duration={500}>Events</Link></li>

                <li className='p-4 text-4xl hover:text-gray-500 text-blue-400 duration-300'> <Link to='donate' spy={true} smooth={true} offset={-90} duration={500}>Donate</Link></li>

                <li className='p-4 text-4xl hover:text-gray-500 text-blue-400 duration-300'> 
                <Link to='form' spy={true} smooth={true} offset={-90} duration={500}>Contact</Link></li>

            </ul>

            </div>
        </div>
    )
}

export default Navbar
