import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './ducks'
import App from './components'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
