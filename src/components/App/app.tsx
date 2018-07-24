import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import './app.less'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { RouteComponentProps, Link } from 'react-router-dom'
const logo = require('../../assets/logo.png')
const { Header, Sider, Content } = Layout

class App extends React.Component<IProps & StateProps, IState> {
  
  state = {
    collapsed: true
  }

  private toggle = (): void => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  public render(): JSX.Element {

    const menuItems = this.props.accounts.length > 0 ? [
      {
        key: '/account/:accountName',
        to: '/',
        icon: 'user',
        name: 'Account'
      }
    ] : [
      {
        key: '/login',
        to: '/login',
        icon: 'lock',
        name: 'Login'
      }
    ]

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Link to='/'>
            <div className="logo">
              <img src={logo} />
            </div>
          </Link>
          <Menu theme="dark" mode="inline" selectedKeys={[this.props.match.path]} defaultSelectedKeys={[this.props.match.path]}>
            {
              menuItems.map(i => (
              <Menu.Item key={i.key}>
                <Link to={i.key}>
                  <Icon type={i.icon} />
                  <span>{i.name}</span>
                </Link>
              </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {
              this.props.children
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

interface IState {
  collapsed: boolean
}

interface IProps extends RouteComponentProps<any> {

}

interface StateProps {
  accounts: any,
  settings: any
}

const mapStateToProps = (state: any) => ({
  accounts: state.accounts,
  settings: state.settings
})
​
// const mapDispatchToProps = () => ({
  
// })

export default connect<StateProps, {}>(mapStateToProps, null)(withRouter(App));