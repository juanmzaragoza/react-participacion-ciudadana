import React, { Component} from 'react';
import PropTypes from "prop-types";
import { Provider } from 'react-redux'
import routes from 'routes'
import DevTools from 'components/DevTools'
import { Router } from 'react-router'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
