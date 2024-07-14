import React from 'react';
import './App.css';
import './index.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Login from './components/login';
import { useState } from "react";
import Home from './components/home';
import Post from './components/post';

function App() {
  const [wallet, setWallet] = useState("");
  //props passing here 
  return (
    <>
    <Navbar></Navbar>
      <Hero setWallet={setWallet}/> 
      <Login  wallet={wallet}/>
      <Home wallet={wallet}/>
      <Post></Post>
    </>
  );
}

export default App;
