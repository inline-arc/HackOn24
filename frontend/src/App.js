
import React from 'react';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Login from './components/login';
import { useState } from "react";

function App() {
  const [wallet, setWallet] = useState("");

  return (
    <>
    <Navbar></Navbar>
      <Hero setWallet={setWallet}/>
      <Login  wallet={wallet}/>
    </>
  );
}

export default App;
