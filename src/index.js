import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
