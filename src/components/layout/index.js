import React from 'react'

import { Layout } from 'antd'
import QfContent from './QfContent'
import QfHeader from './QfHeader'
import QfSider from './QfSider'

import './style.scss'

const { Header, Sider, Content } = Layout

export default class QfLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state ={}
  }
  render() {
    return (
      <Layout>
        <Sider width={135}>
           <QfSider />
        </Sider>
       <Layout>
         <Header>
            <QfHeader />
         </Header>
         <Content>
            <QfContent />
         </Content>
       </Layout>
     </Layout>
    )
  }
}
