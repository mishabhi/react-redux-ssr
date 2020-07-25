import React, { Fragment, useState } from 'react';
import Layout from '../layout';
import Header from '../header';
import PageHeaderContext from '../../context';
import ItemsListHeader from '../common/items-list-header';
import "./styles.scss";

function App() {

  const [title, setTitle] = useState("Popular Titles")
  const contextValue = {title, setTitle}

  return (    
      <PageHeaderContext.Provider value={contextValue}>
        <Fragment>
          <Header />
          <ItemsListHeader headerTitle={title} />         
          <Layout />         
        </Fragment>
      </PageHeaderContext.Provider>    
  );
}

export default App;
