import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//boiler plate for redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import marvelApp from './reducers'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//Creating a store and passing it reducers 'marvelApp'
let store = createStore (marvelApp, applyMiddleware(thunk))


ReactDOM.render(
//applying store through provider to the App
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
