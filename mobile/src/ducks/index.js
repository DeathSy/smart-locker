import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { createLogger } from 'redux-logger'

import account, { fetchAccountWatcherSaga } from './account'

const saga = createSagaMiddleware()
const logger = createLogger()

export const middlewares = [saga, logger]

export const reducers = combineReducers({ account })

const store = createStore(reducers, applyMiddleware(...middlewares))

function * rootSaga () {
  yield all([fetchAccountWatcherSaga()])
}

saga.run(rootSaga)

export default store
