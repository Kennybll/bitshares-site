import { ADD_ACCOUNT } from '../actions/accounts'

interface IAction {
  type: string
  payload: any
}

let defaultState: object = {
  accounts: []
}

export default (state: any = defaultState, action: IAction) => {
  switch (action.type) {
    case ADD_ACCOUNT.finish:
      return {
        accounts: [
          action.payload.account,
          ...state.accounts
        ],
        ...state
      }
    default:
      return state
  }
}