import React from 'react'

import { Select } from 'antd'
// 状态管理
import { connect } from 'react-redux'
import { getCates } from '@/store/actions/good'

const { Option } = Select

// 业务组件（UI组件+业务数据）
// 使用 Prop-Types 进行属性验证、默认值

function mapStateToProps(state) {
  return {
    cateArr: state.good.cateArr
  }
}
function mapActionToProps(dispatch) {
  return {
    getCates: (params)=>dispatch(getCates(params))
  }
}

class CateSelect extends React.Component {

  componentDidMount() {
    this.props.getCates({})
  }

  createSelect() {
    let { cateArr } = this.props
    return cateArr.map(ele=>(
      <Option key={ele._id} value={ele.cate}> {ele.cate_zh}</Option>
    ))

  }

  render() {
    let { value } = this.props
    value = value || ''
    return (
      <div>
        <Select style={{width:'100%'}} value={value} onChange={(val)=>this.props.onChange(val)}>
        <Option value=''>全部</Option>
          { this.createSelect() }
        </Select>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionToProps)(CateSelect)
