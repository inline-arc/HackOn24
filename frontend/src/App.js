
import React from 'react';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Login from './components/login';
import { useState } from "react";
import Home from './components/home';

function App() {
  const [wallet, setWallet] = useState("");
  //props passing here 
  return (
    <>
    <Navbar></Navbar>
      <Hero setWallet={setWallet}/> 
      <Login  wallet={wallet}/>
      <Home wallet={wallet}/>
    </>
  );
}

export default App;
