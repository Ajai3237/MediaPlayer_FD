import { Route, Routes } from "react-router-dom"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import WatchHistory from "./pages/WatchHistory"


function App() {
 

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<LandingPage/>}/> 
      <Route path="/Home" element={<Home/>}/> 
      <Route path="/Watch" element={<WatchHistory/>}/>

    </Routes>

    <Footer/>

      
    </>
  )
}

export default App
