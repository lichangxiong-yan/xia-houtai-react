import React from 'react'
import moment from 'moment'
import './style.scss'

import {
  Table,
  Divider,
  Row,
  Col,
  Input,
  DatePicker,
  Modal
} from 'antd'
import { CateSelect } from '@/components'

import img from '@/utils/img'

const { RangePicker } = DatePicker

export default class Good extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cate: '',
      visible: false,
      row: {},
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        }
      ]
    }
  }

  // 品类筛选
  cateFilter(val) {
    this.setState({cate: val})
    // 调接口进行筛选
  }

  // 根据日期进行筛选
  dateFilter(dates) {
    console.log('dates', dates)
    console.log()
    console.log()

    let startTime = dates[0].format('YYYY-MM-DD HH:mm:ss')
    let endTime = dates[1].valueOf()

    // YYYY-MM-DD HH:mm:ss
    // 做一些时间格式的处理工作
    // 调接口进行筛选
  }

  // 表格行的操作
  tableRowHandle(type, row) {
    switch (type) {
      case 'edit':
        this.setState({visible: true, row:row})
        break;
      default:

    }
  }

  // 编辑功能
  modelBtnClick(type) {
    switch (type) {
      case 'ok':
        // 提交接口
        break;
      case 'cancel':
        this.setState({visible: false})
        break;
      default:

    }
  }

  render() {
    let { data, cate, visible, row } = this.state
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, row, index)=>{
          return (
            <div>
              <img style={{display:'inline-block',width:'50px',height:'50px'}} src={img.abc} alt=""/>
              <div>{text}</div>
            </div>
          )
        }
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        dataIndex: 'handle',
        key: 'handle',
        render: (text, row)=> {
          return (
            <div className='table-handle'>
              <a onClick={this.tableRowHandle.bind(this,'edit', row)}>编辑</a>
              <a>删除</a>
            </div>
          )
        }
      }
    ]

    return (
      <div>
        <Divider orientation="left">商品列表</Divider>
        <div style={{marginTop:'20px', marginBottom:'20px'}}>
          <Row align='middle'>
            <Col span={2}>
              <span>名称搜索:</span>
            </Col>
            <Col span={4}>
              <Input allowClear={true} />
            </Col>
            <Col span={2}>
              <span>品类筛选:</span>
            </Col>
            <Col span={6}>
              <CateSelect value={cate} onChange={this.cateFilter.bind(this)}></CateSelect>
            </Col>
          </Row>

          <Row style={{marginTop: '20px'}}>
            <Col span={2}>
              <span>日期选择:</span>
            </Col>
            <Col span={12}>
              <RangePicker
                format='YYYY-MM-DD HH:mm:ss'
                showTime
                onChange={this.dateFilter.bind(this)} />
            </Col>
          </Row>
        </div>
        <Table columns={columns} dataSource={data} />
        <Modal
          title="商品操作"
          visible={visible}
          onOk={this.modelBtnClick.bind(this, 'ok')}
          onCancel={this.modelBtnClick.bind(this, 'cancel')}
        >
          <p>{row.name}</p>
          <p>{row.address}</p>
        </Modal>
      </div>
    )
  }
}
