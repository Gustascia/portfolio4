import { BrowserRouter } from 'react-router-dom'

import {About , Contact ,Experience, Navbar, Tech, Hero, Works} from './components'


const App = () =>  {


  return (
   <BrowserRouter>
   <div className='relative z-0 blue-gradient'>
    <div className=' bg-cover bg-no-repeat bg-center'>
      <Navbar/>
      <Hero/>
      </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Contact/>
        

      </div>
   </BrowserRouter>
  )
}

export default App
