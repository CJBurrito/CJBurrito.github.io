import React from "react";
import 'materialize-css';
import { Link } from 'react-router-dom';
import logo from './christian logo.png'
import './style.css';

function navbar() {
    return (
        <nav className='amber darken-1'>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center "><img className='logo' src={logo}></img></Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/Portfolio" className="list navTitle">portfolio </Link></li>
            <li><Link to="/linkedIn" className="list navTitle">linkedin </Link></li>
            <li><Link to="/github" className="list navTitle">gitHub </Link></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li ><a className="navTitle">Resume</a></li>
            </ul>
        </div>
      </nav>
      
    )
};

export default navbar;