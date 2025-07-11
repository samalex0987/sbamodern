import { useState } from 'react'
import Navbar from './navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/home'
import Dataandai from './Dataandai/Dataandai'
import It_and_buisness_automation from './itandautomation/itandautomation'
import Open_hybrid_cloud from './openhybridcloud/Openhybridcloud'
import Security_and_sustainability from './securityandsustainability/security_and_sustainability'
import Company from './company/company'
import Carrers from './carrers/carrers'
import Apply from './apply/apply'
import Test from './test'
import SuccessStories from './stories/stories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Data-and-ai' element={<Dataandai />} />
            <Route path='/It_and_buisness_automation' element={<It_and_buisness_automation />} />
            <Route path='/Open_hybrid_cloud' element={<Open_hybrid_cloud />} />
            <Route path='/Security_and_sustainability' element={<Security_and_sustainability/>} />
            <Route path='/Company' element={<Company />} />
            <Route path='/Join-with-us' element={<Carrers />} />
            <Route path='/Apply' element={<Apply />} />
            <Route path='/test' element={<Test />} />
            <Route path='/our-stories' element={<SuccessStories />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
