import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes}from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Routes path='/profile' component={Profile} />
          <Routes path='/dialogs' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

