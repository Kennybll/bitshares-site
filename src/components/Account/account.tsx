import * as React from 'react'
import { withRouter } from 'react-router'
import API from '../../helpers/btsAPI'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

class Account extends React.Component<RouteComponentProps<{}> & StateProps, IState> {

  api: any;

  getAccount(accountName: string) {
    this.api.getAccount(accountName).then((account: any) => {
      this.setState({
        account
      })
    })
  }

  componentWillMount() {
    this.api = new API(this.props.settings.activeNode)
  }

  public render(): JSX.Element {
    return (
      <div></div>
    )
  }
}

interface IState {
  account: any
}

// interface IProps extends RouteComponentProps<any> {
//   form: any
// }

interface StateProps {
  accounts: any,
  settings: any
}

const mapStateToProps = (state: any) => ({
  accounts: state.accounts,
  settings: state.settings
})

export default connect<StateProps, any>(mapStateToProps, null)(withRouter(Account));