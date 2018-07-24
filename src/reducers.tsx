import { combineReducers } from 'redux'
import settingsReducer from './reducers/settings'
import accountsReducer from './reducers/accounts'

export default combineReducers({
  settings: settingsReducer,
  accounts: accountsReducer
})