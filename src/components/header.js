import React from "react";

import { ReactComponent as Search } from "../assets/search.svg";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-inner">
          <div className="logo">
            <h1>Gentium.</h1>
          </div>
          <div className="nav-link">
            <ul>
              <li>Home</li>  
              <li>Service</li>
              <li>Works</li>
              <li>About</li>
              <li>Client</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>
                <Search />
              </li>
            </ul>
          </div>
        <div className="bar"></div>

        </div>
      </div>
    </header>
  );
}

export default Header;
