import React from 'react'
import './style.scss'

import {
  Table,
  Divider,
  Row,
  Col,
  Input,
  DatePicker,
  Modal,
  Button
} from 'antd'
import { CateSelect } from '@/components'

import img from '@/utils/img'
import { connect } from 'react-redux'
import { getGoods } from '@/store/actions/good'

const { RangePicker } = DatePicker

function mapStateToProps(state) {
  return {
    goodData: state.good.goodData
  }
}
function mapActionToProps(dispatch) {
  return {
    getGoods: (params)=>dispatch(getGoods(params))
  }
}
class Good extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      row: {},
      // 查询
      params: {
        page: 1,
        size: 2,
        cate: '',
        hot: true
      }
    }
  }

  componentDidMount() {
    this.props.getGoods(this.state.params)
  }

  // 专门用来做筛选
  filterChange(key, value) {
    // 改变params
    let { params } = this.state
    if (key != 'page') params.page = 1
    params[key] = value
    this.setState({params})
    // 调接口
    this.props.getGoods(params)
  }

  // 品类筛选
  cateChange(val) {
    this.filterChange('cate', val)
  }

  // 页码变化
  pageChange(page,size) {
    console.log(page, size)
    this.filterChange('page', page)
  }
  // size变化
  sizeChange(current, size) {
    console.log(current,size)
    this.filterChange('size', size)
  }

  // 根据日期进行筛选
  dateChange(dates) {
    console.log('dates', dates)

    let startTime = dates[0].format('YYYY-MM-DD HH:mm:ss')
    let endTime = dates[1].valueOf()

    console.log('st', startTime)
    console.log('et', endTime)

    // YYYY-MM-DD HH:mm:ss
    // 做一些时间格式的处理工作
    // 调接口进行筛选
  }

  // 表格行的操作
  tableRowHandle(type, row) {
    switch (type) {
      case 'edit':
        this.props.history.push('/good/add/'+row._id)
        break;
      case 'delete':
        this.setState({visible: true, row:row})
        break;
      default:
    }
  }

  // model弹框事件
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
  // 跳转到新增页面
  skip() {
    console.log('111')
    // 构造动态参数
    let id =0
    this.props.history.push('/good/add/'+id)
  }


  render() {
    let { params, visible, row } = this.state
    let { goodData } = this.props
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, row, index)=>{
          return (
            <div>
              <img style={{display:'inline-block',width:'50px',height:'50px'}} src={row.img} alt=""/>
              <div>{text}</div>
            </div>
          )
        }
      },
      {
        title: '商品描述',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '操作',
        dataIndex: 'handle',
        key: 'handle',
        render: (text, row)=> {
          return (
            <div className='table-handle'>
              { /* eslint-disable */ }
              <a onClick={this.tableRowHandle.bind(this,'edit', row)}>编辑</a>
              <a onClick={this.tableRowHandle.bind(this,'delete', row)}>删除</a>
              { /* eslint-enable */ }
            </div>
          )
        }
      }
    ]

    return (
      <div>
        <Divider orientation="left">商品列表</Divider>
        <div>
          <Button onClick={this.skip.bind(this)} size='small'>新增</Button>
        </div>
        <div style={{marginTop:'20px', marginBottom:'20px'}}>
          <Row align='middle' style={{textAlign:'center'}}>
            <Col span={2}>
              <span>名称搜索:</span>
            </Col>
            <Col span={4}>
              <Input allowClear={true} />
            </Col>
            <Col span={2} push={2}>
              <span>品类筛选:</span>
            </Col>
            <Col span={6} push={2}>
              <CateSelect value={params.cate} onChange={this.cateChange.bind(this)}></CateSelect>
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
                onChange={this.dateChange.bind(this)} />
            </Col>
          </Row>
        </div>
        { /* rowKey一定要加，否则报错 */ }
        <Table
          columns={columns}
          rowKey='_id'
          dataSource={goodData.list}
          pagination={
            {
              total: goodData.total,
              defaultPageSize: 2,
              showSizeChanger: true,
              pageSizeOptions: ['2','3','4','5','10'],
              showQuickJumper: true,
              onChange: this.pageChange.bind(this),
              onShowSizeChange: this.sizeChange.bind(this)
            }
          }
        />
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

export default connect(mapStateToProps, mapActionToProps)(Good)
