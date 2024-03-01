import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Ranks from './components/Ranks'
import About from './components/About'
import Carousel from './components/Carousel'

const App = () => {
  return (
    <div className='min-h-screen bg-white dark:bg-slate-800'>
      <Navbar/>
      <Content/>
      <About/>
      <Ranks/>
      <Carousel/>
    </div>
  )
}

export default App