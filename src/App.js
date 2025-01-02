import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './components/About';
import Countries from './components/Countries';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import Saved from './components/Saved';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
