import React from 'react';
import ReactDOMServer from "react-dom/server";
import { Provider as ReduxProvider} from 'react-redux';
import configureStore from '../store/config';
import App from '../components/root';
import { StaticRouter, matchPath } from 'react-router-dom';
import * as config from "../config/server";
import routes from "../routes";
import Cookies from 'universal-cookie';

export const htmlString = async(request) => {
  //const cookies = new Cookies(request.headers.cookie);
  const initialState = {};
  const routerContext = {};
  const store = configureStore(initialState, config)
  const dataSources = routes
                        .filter(route => matchPath(request.originalUrl, route))
                        .map(route => route.component)
                        .filter(component => component.getInitialStates)
                        .map(component => component.getInitialStates(store, request)); 
  await Promise.all(dataSources);
  const content = ReactDOMServer.renderToString(
    <ReduxProvider store={store}>
      <StaticRouter location={request.originalUrl} context={routerContext}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );
  const state = store.getState();
  return {state, content};
}






