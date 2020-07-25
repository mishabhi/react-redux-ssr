import React, { Fragment } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="headerContainer">            
          <div className="demoStreaming">            
              <Link to={"/"}>
                <span>DEMO Streaming</span>            
              </Link>
          </div>        
          <nav className="navOptions">
            <ul className="navs">                
              <li className="navOption">
                <a className="login" href="/home">
                  Log in
                </a>
              </li>
              <li className="navOption">
                <button className="freeTrial">               
                  <span className="freeTrialText">Start your free trial</span>
                </button>
              </li>
            </ul>              
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
