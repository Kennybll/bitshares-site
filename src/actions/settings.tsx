import actionCreator from '../helpers/reduxActions'

export const CHANGE_NODE = actionCreator('CHANGE_NODE')

export const changeNode = (url: string) => {
  return {
    type: CHANGE_NODE.finish,
    payload: {
      activeNode: url
    }
  }
}