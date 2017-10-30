import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { createLogger } from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const saga = createSagaMiddleware()
const router = routerMiddleware(history)
const logger = createLogger()

export const middleware = [router, saga, logger]

export const reducers = combineReducers({ route: routerReducer })

const store = createStore(reducers, applyMiddleware(...middleware))

function * rootSaga () {
  yield all([])
}

saga.run(rootSaga)

export default store
