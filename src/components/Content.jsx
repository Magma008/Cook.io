import React from 'react'
import meals from "../Images/meals.jpg"

const Content = () => {
    return (
        <div id='home' className='min-h-screen flex flex-col justify-center mt-8 md:mt-0 dark:text-white'>
            <div className="main-container">
                <div className="flex justify-between flex-col md:flex-row md:items-center">
                    <div className="aspect-[16/10] overflow-hidden rounded-md w-full md:w-[40%]">
                        <img src={meals} alt="meals" className="w-full h-full object-cover" />
                    </div>
                    <div className="text w-full md:w-[50%]">
                        <p className="text-base lg:text-lg font-medium mb-4 md:mb-0">Natural food and all-natural food are terms in food labeling and marketing with several definitions, often implying foods that are not manufactured by processing. In some countries like the United Kingdom, the term "natural" is defined and regulated; in others, such as the United States, the term natural is not enforced for food labels, although there is USDA regulation of organic labeling.
                            The term is assumed to describe foods having ingredients that are intrinsic to an unprocessed food.</p>
                        <a href="https://en.wikipedia.org/wiki/Natural_food" className='flex justify-end'>
                            <button className="bg-teal-500 px-4 py-1 text-lg text-red-800 border border-teal-500 transition-all duration-300 hover:text-teal-500 hover:bg-transparent">Read All</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content