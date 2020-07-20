import React from 'react'

// 路由
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '@/views'

export default class QfContent extends React.Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  // 生成视图容器
  createRoutes() {
    let res = []
    // 递归函数
    function create(arr) {
      arr.map(ele=>{
        res.push(
          <Route
            exact
            path={ele.path}
            component={ele.component}
            key={ele.id}>
          </Route>
        )
        // 递归一定要有结束条件
        if (ele.children) {
          create(ele.children)
        }
        return false
      })
    }
    // 调用递归
    routes.map(ele=>{
      create(ele.children)
      return false
    })
    return res
  }

  render() {
    return (
      <div className='qf-content'>
      <Switch>
        {this.createRoutes()}
        <Redirect from='/*' to='/'></Redirect>
      </Switch>
      </div>
    )
  }
}
