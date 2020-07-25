import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes';
import "./styles.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Layout = (props) => {
  return (
      <div className="transitionGroupContainer">
        <TransitionGroup className="transitionGroup">
            <CSSTransition key={1} timeout={1000} classNames="fade">
                <div className="routerWrapper">
                  <Switch>
                    { routes.map(route => <Route key={route.path} {...route} />) }
                  </Switch>
                </div>
            </CSSTransition>
        </TransitionGroup>
      </div>
    
  );    
}
export default Layout;
