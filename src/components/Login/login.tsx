import * as React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './login.less'
import { withRouter } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'
const FormItem = Form.Item

class Login extends React.Component<IProps, {}> {

  private handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  
  public render(): JSX.Element {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <h1 className="login-title">Login To Your Bitshares Account</h1>
        <FormItem
          label='Username'
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          label='Private Key'
        >
          {getFieldDecorator('key', {
            rules: [{ required: true, message: 'Please input your Private Key!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Private Key" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}

interface IProps extends RouteComponentProps<any> {
  form: any
}

export default Form.create()(withRouter(Login));