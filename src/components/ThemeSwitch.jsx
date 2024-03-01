import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("dark")
      }
      else (
        setTheme("light")
      )
    }, [])

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      }
      else (
        document.documentElement.classList.remove("dark")
      )
    }, [theme])

    const switchHandler = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div>
            <button className='flex' onClick={() => switchHandler()}>
                {theme === "dark" ? <FaSun className='w-7 h-7' /> : <FaMoon className='w-7 h-7' />}                
            </button>
        </div>
    )
}

export default ThemeSwitch