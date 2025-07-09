import { useState } from 'react'
import Navbar from './navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/home'
import Dataandai from './Dataandai/Dataandai'
import It_and_buisness_automation from './itandautomation/itandautomation'
import Open_hybrid_cloud from './openhybridcloud/Openhybridcloud'
import Security_and_sustainability from './securityandsustainability/security_and_sustainability'


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
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
