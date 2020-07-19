import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import './style.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { login } from '@/store/actions/test'
import { login } from '@/store/actions/test'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}


function mapStateToProps(state){
  return {
    msg: state.test.msg,
  }
}
function mapActionToProps(dispatch) {
  return {
    loignAjax: (params)=>dispatch(login(params))
  }
}

class Login extends React.Component {

  onFinish(value) {
    // console.log(value)
    // console.log(this.props)
    // await this.props.loignAjax()
    localStorage.setItem('token', 123)
    // this.props.onFinish()
    console.log(this.props)
    this.props.onLogin()
  }

  componentDidMount() {
    console.log(this.props.history.replace('/login'))
  }

  render() {
    return(
      <div className='loign'>
        <div className='login-wrap'>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish.bind(this)}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapActionToProps)(withRouter(Login))
