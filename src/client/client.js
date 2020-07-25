import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider} from 'react-redux';
import configureStore from '../store/config';
import App from '../components/root';
import {BrowserRouter as Router} from "react-router-dom";
import * as config from "../config/client";

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(state, config)

ReactDOM.hydrate(
  <ReduxProvider store={store} >
   <Router>
      <App />
   </Router>
  </ReduxProvider>,
  document.querySelector('#root')
)
