import { put, takeEvery } from 'redux-saga/effects'

export const FETCH_ACCOUNT_START = 'account/FETCH_ACCOUNT_START'
export const FETCH_ACCOUNT_SUCCESS = 'account/FETCH_ACCOUNT_SUCCESS'
export const FETCH_ACCOUNT_ERROR = 'account/FETCH_ACCOUNT_ERROR'

export function startFetchAccounts (studentId) {
  return { type: FETCH_ACCOUNT_START }
}

export function successFetchAccounts (account) {
  return { type: FETCH_ACCOUNT_SUCCESS, payload: { account } }
}

export function errorFetchAccounts (error) {
  return { type: FETCH_ACCOUNT_ERROR, payload: { error } }
}

function * fetchAccountService () {
  try {
    yield put(successFetchAccounts({}))
  } catch (err) {
    yield put(errorFetchAccounts(err))
  }
}

export function * fetchAccountWatcherSaga () {
  yield takeEvery(FETCH_ACCOUNT_START, fetchAccountService)
}

export const initialState = {
  detail: {},
  error: null
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_ACCOUNT_SUCCESS: {
      return { ...state, detail: action.payload.account }
    }
    case FETCH_ACCOUNT_ERROR: {
      return { ...state, error: action.payload.error }
    }
    default: {
      return { ...state }
    }
  }
}
