import React from 'react';
import '@/assets/style/common.scss'
// antd样式
import 'antd/dist/antd.css';
import { Layout, Login } from '@/components'

// 路由
import { HashRouter } from 'react-router-dom'

// 状态管理
import { Provider } from 'react-redux'
import store from '@/store'

// 无状态组件
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem('token')
    }
  }
  // 这个方法只有login时才调用
  loginHandle() {
    this.setState({token: localStorage.getItem('token')})
  }
  render() {
    let { token } = this.state
    return (
      <div className="app">
      <HashRouter>
        <Provider store={store}>
            {
              token ? <Layout /> : <Login onLogin={this.loginHandle.bind(this)} />
            }
        </Provider>
      </HashRouter>
      </div>

    );
  }
}
