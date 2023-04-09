import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing';
import SideNav from "./Components/SideNav/SideNav"
import './index.css';
import '../src/Components/SideNav/SideNav.css';
import '../src/Components/Home/Home.css';
import '../src/Components/Sustainbility/Sustainability.css';
import TestNet from "./Components/TestNet/TestNet"
import Research from './Components/Research/Research';
import './Components/Research/Research.css';
import Sustainbility from "./Components/Sustainbility/Sustainbility"
import "./Components/Home2/Home2.css"


const App = () => {
    return (
            <Routes>
                <Route path='/' exact  element={<Landing />} />
                <Route path='/testnet' exact  element={<TestNet />} />
                <Route path='/research' exact  element={<Research />} />
                <Route path='/sustain' exact  element={<Sustainbility />} />
            </Routes>
        )
};

