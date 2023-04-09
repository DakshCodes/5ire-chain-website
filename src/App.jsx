import React from "react"
import SideNav from "./Components/SideNav/SideNav"
import './index.css';
import '../src/Components/SideNav/SideNav.css';
import '../src/Components/Home/Home.css';
import '../src/Components/Sustainbility/Sustainability.css';
import Landing from "./Pages/Landing";
import Sustainability from './Components/Sustainbility/Sustainbility'
import BuildEarn from "./Components/BuildEarn/BuildEarn";
import TestNet from "../src/Components/TestNet/TestNet"
import Research from "./Components/Research/Research";

function App() {

  return (
   <>
    {/* <Sustainability /> */}
    {/* <BuildEarn /> */}
    {/* <TestNet /> */}
    {/* <Landing /> */}
    <Research />
   </>
  )
}

export default App
