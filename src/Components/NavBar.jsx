import React, { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className='flex justify-between items-center py-3 top-0 sticky bg-greenlight shadow-md px-10'>
                <h1 className=' text-4xl font-bold text-black cursor-pointer'>Natish G</h1>
                <div >
                    <ul className='hidden md:flex space-x-8'>
                        <li><a className='navClick'>Home</a></li>
                        <li ><a className='navClick'>About</a></li>
                        <li ><a className='navClick'>Skills</a></li>
                        <li ><a className='navClick'>Projects</a></li>
                        <li ><a className='navClick'>Contact</a></li>
                    </ul>
                    <button className='md:hidden cursor-pointer'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img className='h-11 ' src="./image/Menu.svg" alt="Menu" />
                    </button>
                </div>
            </nav>
            <nav
                className={`bg-greenlight md:hidden sticky top-18.5 overflow-hidden transition-all duration-500 ease-in-out
                 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>                
                 <div className='py-5 shadow-md'>
                    <ul className='flex flex-col items-center space-y-5 '>
                        <li><a className='navClick  '>Home</a></li>
                        <li ><a className='navClick '>About</a></li>
                        <li ><a className='navClick '>Skills</a></li>
                        <li ><a className='navClick '>Projects</a></li>
                        <li ><a className='navClick '>Contact</a></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default NavBar

