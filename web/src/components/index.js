import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { history } from '../ducks'
import Landing from './Landing'
import Dashboard from './Dashboard'

history.listen((location, action) => {
  console.log(action)
})

const Index = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/dashboard' component={Dashboard} />
    </div>
  </ConnectedRouter>
)

export default Index
