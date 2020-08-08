import { combineReducers } from 'redux'
import { authReducer } from './modules/auth/store'

const rootReducer = combineReducers({
  auth: authReducer
})

export default rootReducer
