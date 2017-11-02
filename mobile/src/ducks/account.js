import { put, takeEvery } from 'redux-saga/effects'

export const FETCH_ACCOUNT_START = 'account/FETCH_ACCOUNT_START'
export const FETCH_ACCOUNT_SUCCESS = 'account/FETCH_ACCOUNT_SUCCESS'
export const FETCH_ACCOUNT_ERROR = 'account/FETCH_ACCOUNT_ERROR'
export const REMOVE_ACCOUNT = 'account/REMOVE_ACCOUNT'

export function startFetchAccounts (studentId) {
  return { type: FETCH_ACCOUNT_START }
}

export function successFetchAccounts (account) {
  return { type: FETCH_ACCOUNT_SUCCESS, payload: { account } }
}

export function errorFetchAccounts (error) {
  return { type: FETCH_ACCOUNT_ERROR, payload: { error } }
}

export function removeAccount (studentId) {
  return { type: REMOVE_ACCOUNT, payload: { studentId } }
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
  accounts: [
    { name: 'Jerrylee', studentId: '59130500123', until: '9:23 PM' },
    { name: 'Stefa', studentId: '57130500024', until: '3:30 PM' },
    { name: 'Eric', studentId: '6013050064', until: '7:09 PM' },
    { name: 'Jud', studentId: '58130500040', until: '9:48 PM' },
    { name: 'Saw', studentId: '56130500017', until: '9:14 PM' }
  ],
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
    case REMOVE_ACCOUNT: {
      const accounts = state.accounts.filter(
        acc => acc.studentId !== action.payload.studentId
      )
      return { ...state, accounts }
    }
    default: {
      return { ...state }
    }
  }
}
