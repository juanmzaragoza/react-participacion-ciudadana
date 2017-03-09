import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import configureStore from './store/configureStore'
import configureActors from "./store/configureActors";

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './components/Root'

import Index from './pages/Index'

//assets y estilos
import './public/vendor/bastrap3/bootstrap.min.css'
import './public/vendor/bastrap3/bastrap.css'
import './public/vendor/bastrap3/style.css'
import './public/vendor/bastrap3/jquery.min.js'
import './public/vendor/bastrap3/bootstrap.min.js'
import './public/vendor/font-awesome/css/font-awesome.min.css'

import './public/css/participacion_ciudadana.css'
import './public/css/datepicker.css'

import './public/js/jquery-ui.js'

import './public/js/index.js'

var store = configureActors(configureStore());
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('app')
)
