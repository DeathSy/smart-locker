import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { createLogger } from 'redux-logger'

const saga = createSagaMiddleware()
const logger = createLogger()

export const middlewares = [saga, logger]

export const reducers = combineReducers({})

const store = createStore(reducers, applyMiddleware(...middlewares))

function * rootSaga () {
  yield all([])
}

saga.run(rootSaga)

export default store
