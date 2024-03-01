import React, { useState } from 'react'
import { PiArrowFatLinesLeftFill, PiArrowFatLinesRightFill } from "react-icons/pi";
import meals from "./data"

const Carousel = () => {
    const [num, setNum] = useState(0)
    let {id, image , country, name, data} = meals[num]


    const numCheck = (checking) => {
        if (checking > meals.length - 1) {
            return checking = 0
        } 
        else if (checking < 0) {
            return checking = meals.length - 1
        }

        return checking
    }

    const addHandler = () => {
        setNum(numCheck(num + 1))
    }

    const minusHandler = () => {
        setNum(numCheck(num - 1))
    }

    const randomHandler = () => {
        const randomNum = Math.floor(Math.random()*meals.length)
        if (randomNum === num) {
            randomNum = num + 1
        }
        setNum(numCheck(randomNum))
    }



    return (
        <div id='carousel'>
            <div className="main-container">
                <h1 className="text-center mb-3 text-2xl md:text-4xl font-semibold dark:text-white">Top 10 famous meals around the world</h1>
                <div className="grid grid-cols-1 md:px-0 md:grid-cols-5">
                    <div></div>
                    <div className="dark:bg-indigo-800 bg-green-300 col-span-3 p-4 rounded-md">
                        <div className="flex justify-center">
                            <div className="bg">
                                <div className="h-[13rem] w-[13rem] overflow-hidden dark:border-cyan-500 roundedExl border-4 border-red-600">
                                    <img src={image} alt="carousel_image" className="w-full h-full object-cover object-center" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 text-center dark:text-white">
                            <p className="text-2xl md:text-3xl font-semibold dark:text-green-500">{name}</p>
                            <p className="md:text-lg font-medium">Rank:<span className='ml-2'>{id}</span></p>
                            <p className="md:text-xl font-medium">Country:<span className='ml-2'>{country}</span></p>
                            <p className="font-normal md:text-lg">{data}</p>
                            <div className="flex justify-center mt-2 gap-3 md:gap-4 items-center">
                                <button onClick={() => minusHandler()} className="">
                                    <PiArrowFatLinesLeftFill className='w-9 md:h-12 h-9 md:w-12 text-cyan-600' />
                                </button>
                                <button onClick={() => randomHandler()} className="border border-black px-4 py-1 text-base font-medium transition-all duration-300 hover:bg-slate-900 hover:text-white rounded text-black dark:hover:bg-white dark:text-white dark:border-white dark:hover:text-black md:text-lg">Random</button>
                                <button onClick={() => addHandler()} className="">
                                    <PiArrowFatLinesRightFill className='w-9 md:h-12 h-9 md:w-12 text-cyan-600' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel