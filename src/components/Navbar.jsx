import React, { useState } from 'react'
import { BsMenuDown } from "react-icons/bs";
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className='bg-white dark:bg-slate-900 py-3 shadow-md dark:shadow-slate-700 sticky top-0'>
            <div className="main-container">
                <div className="flex items-center justify-between flex-col md:flex-row">
                    <div className="flex justify-between items-center w-full md:w-[50%]">
                        <h1 className="text-2xl sm:text-3xl font-semibold dark:text-sky-500">Cook.io</h1>
                        <button onClick={() => setOpen(!open)}>
                            <BsMenuDown className={`dark:text-cyan-500 md:hidden transition-all duration-300 w-8 h-8 ${open ? "" : "rotate-180"}`} />
                        </button>
                    </div>
                    <ul className={`flex justify-between md:items-center w-full flex-col md:flex-row md:w-[40%] overflow-hidden lg:w-[30%] transition-all duration-300 ${open ? "h-0":"h-[13rem]"} md:h-auto dark:text-white`}>

                        <li className='py-2 transition-all duration-300 hover:bg-red-300/80 dark:hover:bg-amber-400/80 hover:pl-3 md:hover:bg-white dark:md:hover:bg-slate-900 md:hover:pl-0'>
                            <a className=' hover:text-fuchsia-500 dark:hover:text-lime-400 hover:underline md:text-lg' href="#home">Home</a>
                        </li>

                        <li className='py-2 transition-all duration-300 hover:bg-red-300/80 dark:hover:bg-amber-400/80 hover:pl-3 md:hover:bg-white dark:md:hover:bg-slate-900 md:hover:pl-0'>
                            <a className=' hover:text-fuchsia-500 dark:hover:text-lime-400 hover:underline md:text-lg' href="#about">About</a>
                        </li>

                        <li className='py-2 transition-all duration-300 hover:bg-red-300/80 dark:hover:bg-amber-400/80 hover:pl-3 md:hover:bg-white dark:md:hover:bg-slate-900 md:hover:pl-0'>
                            <a className=' hover:text-fuchsia-500 dark:hover:text-lime-400 hover:underline md:text-lg' href="#ranks">Ranks</a>
                        </li>

                        <li className='py-2 transition-all duration-300 hover:bg-red-300/80 dark:hover:bg-amber-400/80 hover:pl-3 md:hover:bg-white dark:md:hover:bg-slate-900 md:hover:pl-0'>
                            <a className=' hover:text-fuchsia-500 dark:hover:text-lime-400 hover:underline md:text-lg' href="#carousel">Meals</a>
                        </li>

                        <li className='dark:text-sky-500'>
                            <ThemeSwitch/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar