import initialState, { IAuthState } from './initialState'
import actionTypes from './actionTypes'
import { Action } from 'redux'

interface IDispatchAction extends Action {
  payload: Partial<IAuthState>
}

const authReducer = (state: IAuthState = initialState, action: IDispatchAction) => {
  const { payload, type } = action

  switch (type) {
    case actionTypes.SET_NAME:
      return { ...state, name: payload }
    default:
      return state
  }
}

export default authReducer
