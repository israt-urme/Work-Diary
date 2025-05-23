import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import rootReducer from './store/reducers'
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {Provider} from 'react-redux'

const initialState = {}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer(),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

