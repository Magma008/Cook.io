import React from 'react'
import cook1 from "../Images/cook1.avif"
import cook2 from "../Images/cook2.avif"
import cook3 from "../Images/cook3.avif"
import cook4 from "../Images/cook4.jpg"

const Ranks = () => {
  return (
    <div id='ranks' className='py-8 dark:text-white'>
      <div className="main-container">
        <h1 className="text-center text-3xl md:text-4xl mb-4">Chief Ranks</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          <div className="card bg-gray-200 dark:bg-slate-700 rounded-md overflow-hidden">
            <div className="card-img aspect-[8/5]">
              <img src={cook1} alt="cook1" className="w-full h-full object-cover" />
            </div>
            <div className="card-body p-2">
              <p className="text-lg sm:text-xl py-3 font-medium text-red-400">Junior Cook</p>
              <p className="text-sm md:text-base">The Commis Chef reports to a specific Chef de Partie to learn all about that station and its operation. <span className="hidden sm:inline">Commis Chefs usually work alongside completing other culinary training in order to gain invaluable on the job experience.</span></p>
            </div>
          </div>

          <div className="card bg-gray-200 dark:bg-slate-700 rounded-md overflow-hidden">
            <div className="card-img aspect-[8/5]">
              <img src={cook2} alt="cook1" className="w-full h-full object-cover" />
            </div>
            <div className="card-body p-2">
              <p className="text-lg sm:text-xl py-3 font-medium text-yellow-500">Middle Cook</p>
              <p className="text-sm md:text-base">To produce the perfect dish, it is necessary to have a chef who is responsible for each food group. <span className="hidden sm:inline">Most large kitchens have multiple stations where different food items and meal components are prepared and made ready to plate and serve.</span></p>
            </div>
          </div>

          <div className="card bg-gray-200 dark:bg-slate-700 rounded-md overflow-hidden">
            <div className="card-img aspect-[8/5]">
              <img src={[cook3]} alt="cook1" className="w-full h-full object-cover" />
            </div>
            <div className="card-body p-2">
              <p className="text-lg sm:text-xl py-3 font-medium text-green-500">Senior Cook</p>
              <p className="text-sm md:text-base">This senior chef has overall control of the kitchen and its staff. They’re often the contact point between suppliers and manage kitchen costs.
              <span className="hidden sm:inline">To become a head chef, you need a great deal of experience within the culinary industry, including knowledge of flavors and cooking methods.</span></p>
            </div>
          </div>

          <div className="card bg-gray-200 dark:bg-slate-700 rounded-md overflow-hidden">
            <div className="card-img aspect-[8/5]">
              <img src={[cook4]} alt="cook1" className="w-full h-full object-cover" />
            </div>
            <div className="card-body p-2">
              <p className="text-lg sm:text-xl py-3 font-medium text-sky-500">Chief Cook</p>
              <p className="text-sm md:text-base">The Executive chef sits at the top of the kitchen hierarchy. This role is more of a managerial or business-orientated position.
              <span className="hidden sm:inline">They usually don’t have a lot to do with the daily running of the kitchen itself.</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Ranks