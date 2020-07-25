import React, { Fragment } from "react";
import "./styles.scss";


const HomeItem = (props) => {
  return (
    <Fragment>            
      <div className="homteItemContainer">
        <div className="homeItemBox">         
         <h3 className="itemType">{props.title}</h3>
        </div>
        <label className="homeItemTitle">Popular {props.title}</label>
      </div>
    </Fragment>    
  );
};

export default HomeItem;
