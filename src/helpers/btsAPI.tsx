let { Apis } = require('bitsharesjs-ws')
let { ChainStore, FetchChain } = require('bitsharesjs')
import { Promise } from 'es6-promise'

export default class API {

  activeNodeURL: any = null

  constructor(activeNodeURL: string) {
    this.activeNodeURL = activeNodeURL
    Apis.instance(this.activeNodeURL, true).init_promise.then((res: any) => {
      ChainStore.init().then(() => {
        Apis.setAutoReconnect(true)
      })
    })
  }

  getAccount = (accountName: string): Promise<any> => {
    return new Promise<any>((resolve: any, reject: any) => {
      Apis.instance().init_promise.then((res: any) => {
        ChainStore.init().then(() => {
          FetchChain('getAccount', accountName).then((returns: any) => {
            resolve(returns.toJS())
          })
        })
      })
    })
  }
}