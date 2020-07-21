import React from 'react'

import {
  Form,
  Input,
  Checkbox,
  Button,
  InputNumber,
  Upload
} from 'antd'
import { CateSelect } from '@/components'
import img from '@/utils/img'

import { connect } from 'react-redux'
import { getGoodDetail, changeDetail } from '@/store/actions/good'
import { addGood } from '@/utils/api'

const { TextArea } = Input
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 }
}

class GoodAdd extends React.Component {
  constructor(props) {
    super(props)
  }
  // mounted
  componentDidMount() {
    let good_id = this.props.match.params.id
    if (good_id) {
      this.props.getGoodDetail({good_id})
    }
  }

  // 表单变化
  change(key, e) {
    let kv = {key, val: ''}
    switch (key) {
      case 'price':
        kv.val = e
        break;
      case 'cate':
        kv.val = e
        break;
      case 'img':
        let { file } = e
        if (file.response) {
          kv.val = img.uploadUrl+file.response.data.url
        }
        break;
      case 'hot':
        kv.val = e.target.checked
        break;
      default:
        kv.val = e.target.value
    }
    this.props.changeDetail(kv)
  }

  // 添加或编辑商品
  onFinish() {
    let { detail } = this.props
    // 有id表示编辑，无id就是添加
    if (detail._id) {
      detail.id = detail._id
    }
    addGood(detail).then(()=>{
      // 添加成功，返回列表页
      this.props.history.goBack()
    })
  }

  render() {
    let { detail } = this.props

    return (
      <div className='good-add'>
        <h1>{detail._id ? '商品编辑' : '商品添加'}</h1>
        <Form
          {...layout}
          name="basic"
          onFinish={this.onFinish.bind(this)}
        >
          <Form.Item
            label="商品名称"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              value={detail.name}
              onChange={this.change.bind(this,'name')} />
          </Form.Item>

          <Form.Item
            label="商品描述"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <TextArea
              row={4}
              value={detail.desc}
              onChange={this.change.bind(this,'desc')} />
          </Form.Item>

          <Form.Item
            label="商品价格"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <InputNumber
            value={detail.price}
            onChange={this.change.bind(this,'price')} />
          </Form.Item>

          <Form.Item
            label='选择品类'
          >
            <CateSelect
              value={detail.cate}
              onChange={this.change.bind(this,'cate')}
            >
            </CateSelect>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Checkbox
              value={detail.hot}
              onChange={this.change.bind(this,'hot')}
            >是否热销</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            { /*这个name给后端取值用的*/ }
            { /* 访问的 upload 接口，与api地址没有任何关系 */ }
            <Upload
              name="file"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action={img.uploadUrl+'/jd/upload/img'}
              onChange={this.change.bind(this, 'img')}
            >
              <img src={detail.img} alt="avatar" style={{ width: '100%' }} />
            </Upload>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              { detail._id ? '修改' : '添加'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    detail: state.good.goodDetail
  }
}
function mapActionToProps(dispatch) {
  return {
    getGoodDetail: (params)=>dispatch(getGoodDetail(params)),
    changeDetail: (payload)=>dispatch(changeDetail(payload))
  }
}
export default connect(mapStateToProps, mapActionToProps)(GoodAdd)
