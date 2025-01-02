import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/countries">Countries</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/sign-in">Sign In</Link></li>
        <li><Link to="/saved">Saved</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
