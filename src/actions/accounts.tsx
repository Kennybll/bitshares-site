import actionCreator from '../helpers/reduxActions'

export const ADD_ACCOUNT = actionCreator('ADD_ACCOUNT')

export const addAccount = (account: any) => {
  return {
    type: ADD_ACCOUNT.finish,
    payload: {
      account
    }
  }
}