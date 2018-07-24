import * as React from 'react'
import './styles/base.less'
import { HashRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { saveState, loadState } from './helpers/localStorage'
import { throttle } from 'lodash'

import App from './components/App/app'
import Login from './components/Login/login'
import Account from './components/Account/account'

const persistedState = loadState()

const store = createStore(reducers, persistedState)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App}>
          <Route path='/login' component={Login} />
          <Route path='/account/:accountName' component={Account} />
        </Route>
      </Switch>
    </HashRouter>
  </Provider>
)