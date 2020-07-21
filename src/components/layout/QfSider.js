import React from 'react'

import { NavLink } from 'react-router-dom'
import routes from '@/views'
import { Menu } from 'antd'
const { SubMenu } = Menu

export default class QfSider extends React.Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  // 生成二级菜单
  createMenuItem(children) {
    return children.map(ele=>(
      <Menu.Item key={ele.id}>
        <NavLink to={ele.path}>{ ele.text }</NavLink>
      </Menu.Item>
    ))
  }
  // 生成菜单
  createLinks() {
    return routes.map(ele=>(
      <SubMenu key={ele.id+''} title={ele.title}>
        { this.createMenuItem(ele.children) }
      </SubMenu>
    ))
  }
  render() {
    return (
      <div className='qf-sider'>
        {/*logo*/}
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['3']}
          mode="inline"
          theme="dark"
        >
        { this.createLinks() }
        </Menu>
      </div>
    )
  }
}
