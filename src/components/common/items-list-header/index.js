import React, { Fragment } from "react";
import "./styles.scss";

const ItemsListHeader = (props) => {
  return (
    <Fragment>
      <section className="pageTitle">
        <div className="pageTitleText">
            <span>{props.headerTitle}</span>
        </div>
      </section>      
    </Fragment>
    
  );
};

export default ItemsListHeader;
