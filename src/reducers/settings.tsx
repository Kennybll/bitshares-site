import nodes from '../helpers/nodes'
import { CHANGE_NODE } from '../actions/settings'

interface IAction {
  type: string
  payload: any
}

let defaultState: object = {
  activeNode: nodes.DEFAULT_WS_NODE,
  nodes: nodes.WS_NODE_LIST
}

export default (state: any = defaultState, action: IAction) => {
  switch (action.type) {
    case CHANGE_NODE.finish:
      return {
        activeNode: action.payload.activeNode,
        ...state
      }
    default:
      return state
  }
}