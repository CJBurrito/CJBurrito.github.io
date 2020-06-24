import React from "react";
import 'materialize-css';
import { Link } from 'react-router-dom'

function navbar() {
    return (
        <nav>
        <div className="nav-wrapper">
          <a Link to="/main" className="brand-logo center transparent">Logo</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            {(<Link to="/Portfolio" className="list">Portfolio </Link>)}
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
};

export default navbar;