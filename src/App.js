import React from 'react';
import '@/assets/style/common.scss'
// antd样式
import 'antd/dist/antd.css';
import { Layout } from '@/components'


// 路由
import { HashRouter } from 'react-router-dom'


// 状态管理
import { Provider } from 'react-redux'
import store from '@/store'

// 无状态组件
export default class App extends React.Component {
  render() {
    return (
      <div className="app">
      <HashRouter>
        <Provider store={store}>
            <Layout />
        </Provider>
      </HashRouter>
      </div>

    );
  }
}
