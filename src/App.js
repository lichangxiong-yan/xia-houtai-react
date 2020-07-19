import React from 'react';
import '@/assets/style/common.scss'
// antd样式
import 'antd/dist/antd.css';
import { Layout, Login } from '@/components'


// 路由
import { HashRouter, Route, Redirect, withRouter } from 'react-router-dom'

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
  loign() {
    this.setState({
      token: localStorage.getItem
    })
    console.log(this)
  }
  render() {
    let { token } = this.state
    return (
      <div className="app">
      <HashRouter>
        <Provider store={store}>
          { token ? <Layout /> : <Login msg1={1} onLogin={this.loign.bind(this)}></Login>}
        </Provider>
      </HashRouter>
      </div>

    );
  }
}
