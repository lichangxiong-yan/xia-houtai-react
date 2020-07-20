import React from 'react'
import './style.scss'

import {
  Form,
  Input,
  Button,
} from 'antd'
import { withRouter } from 'react-router-dom'

import { login } from '@/utils/api'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // 手动把url改变 /login
    this.props.history.replace('/login')
  }

  onLogin(value) {
    console.log('登录', value)
    login(value).then(res=>{
      console.log('登录成功', res)
      localStorage.setItem('token', res.token)
      this.props.history.replace('/')
      this.props.onLogin()
    })
  }

  render() {
    return (
      <div className='qf-login'>
      <Form
        {...layout}
        name="basic"
        onFinish={this.onLogin.bind(this)}
      >
        { /* eslint-disable */ }
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, pattern: /^[a-zA-Z][a-zA-Z0-9]{3,15}$/, message: '用户名有误' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, pattern:/^[a-zA-Z][0-9a-zA-Z\@\!\#\$\^\&\*\-\_]{7,15}$/, message: '密码有误' }]}
        >
          <Input />
        </Form.Item>
        { /* eslint-enable */ }

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>


      </Form>
      </div>
    )
  }
}

export default withRouter(Login)
