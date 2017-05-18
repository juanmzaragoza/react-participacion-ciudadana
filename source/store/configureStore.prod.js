import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import app from 'reducers'

export default function configureStore(preloadedState) {
  return createStore(
    app,
    preloadedState,
    applyMiddleware(thunk)
  )
}
