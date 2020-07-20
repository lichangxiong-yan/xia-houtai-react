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
import { addGood } from '@/utils/api'

import { connect } from 'react-redux'

const { TextArea } = Input

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 }
}

function mapStateToProps(state) {
  return {

  }
}
function mapActionToProps(dispatch) {
  return {

  }
}

class GoodAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // cate: 'a'
      imageUrl: img.uploadIcon
    }
  }

  // 添加商品
  onFinish(data) {
    data.img = this.state.imageUrl
    console.log('提交', data)
    addGood(data).then(()=>{
      // 添加成功，返回列表页
      // console.log('props', this.props)
      this.props.history.goBack()
    })
  }

  cateSelect(val) {
    this.setState({cate: val})
    console.log('cate--------------------',val)
  }

  // 图片上传
  imgChange({file}) {
    if (file.response) {
      console.log('file', file.response.data.url)
      this.setState({
        imageUrl: img.uploadUrl+file.response.data.url
      })
    }
  }

  render() {
    let { imageUrl } = this.state
    return (
      <div className='good-add'>
        <h1>商品添加</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{ hot: false, cate: '' }}
          onFinish={this.onFinish.bind(this)}
        >
          <Form.Item
            label="商品名称"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="商品描述"
            name="desc"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <TextArea row={4} />
          </Form.Item>

          <Form.Item
            label="商品价格"
            name="price"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <InputNumber />
          </Form.Item>

          {/*<Form.Item
            label="手机号码"
            name="mobile"
            rules={[{ required: true, pattern: /^[1][0-9]{10}$/, message: '请输入11位的手机号码' }]}
          >
            <Input />
          </Form.Item>*/}

          <Form.Item
            label='选择品类'
            name='cate'
          >
            <CateSelect
              value={this.state.cate}
              onChange={this.cateSelect.bind(this)}
            >
            </CateSelect>
          </Form.Item>

          <Form.Item {...tailLayout} name="hot" valuePropName="checked">
            <Checkbox>是否热销</Checkbox>
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
              onChange={this.imgChange.bind(this)}
            >
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            </Upload>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>


        </Form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapActionToProps)(GoodAdd)
