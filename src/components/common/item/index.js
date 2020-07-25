import React, { Fragment } from "react";
import "./styles.scss";

const Item = (props) => {
  const {url, title} = props;
  return (
    <Fragment>      
      <div className="itemContainer">
        <div className="itemBox" style={{backgroundImage: `url(${url})`}} />
        <label className="itemTitle">{title}</label>
      </div>     
    </Fragment>    
  );
};

export default Item;
