import React from 'react'
import image1 from "../Images/people_eating.jpg"

const About = () => {
    return (
        <div id='about' className='py-5 dark:text-white'>
            <div className="main-container">
                <h1 className="text-center text-3xl md:text-4xl font-semibold mb-5">About Us</h1>
                <div className="flex gap-2 md:items-center flex-col md:flex-row">
                    <div className="w-full md:w-[50%]">
                        <p className="text-base lg:text-lg">While this "work kitchen" and variants derived from it were a great success for tenement buildings, homeowners had different demands and did not want to be constrained by a 6.4-square-metre (69 sq ft) kitchen. Nevertheless, the kitchen design was mostly ad-hoc following the whims of the architect. In the U.S., the "Small Homes Council", since 1993 the "Building Research Council", of the School of Architecture of the University of Illinois at Urbana–Champaign was founded in 1944 with the goal to improve the state of the art in home building, originally with an emphasis on standardization for cost reduction. It was there that the notion of the kitchen work triangle was formalized: the three main functions in a kitchen are storage, preparation, and cooking (which Catharine Beecher had already recognized), and the places for these functions should be arranged in the kitchen in such a way that work at one place does not interfere with work at another place, the distance between these places is not unnecessarily large, and no obstacles are in the way. A natural arrangement is a triangle, with the refrigerator, the sink, and the stove at a vertex each.</p>
                    </div>
                    <div className="w-full md:w-[50%]">
                        <div className="aspect-[16/11]">
                            <img src={image1} alt="image1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About