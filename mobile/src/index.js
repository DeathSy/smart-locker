import React from 'react'
import { Provider } from 'react-redux'

import store from './ducks'
import RootComponent from './components'

export const Index = () => (
  <Provider store={store}>
    <RootComponent />
  </Provider>
)

export default Index
