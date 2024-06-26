import React from "react";
import {Brand, Cta, Navbar } from "./components";
import {Features,Footer,Blog,Header,Possibility, WhatGPT3 } from "./container";
import './App.css'

const App = () => {
return(
  <div className="App">
    <div className="gradient__bg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
  </div>
)
};

export default App;
