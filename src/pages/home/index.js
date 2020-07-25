import React, { Fragment } from "react";
import HomeItem from "../../components/common/home-items-list";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>          
      <Link to={"/series"}>
        <HomeItem title="Series" />
      </Link>
      <a href={"/movies"}>
        <HomeItem title="Movies" />
      </a>      
    </Fragment>
    
  );
};

export default Home;
