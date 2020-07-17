import React from 'react'

import {
  Form,
  Input,
  Checkbox,
  Button,
  InputNumber
} from 'antd'
import { CateSelect } from '@/components'


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

export default class GoodAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // cate: 'a'
    }
  }

  onFinish(value) {
    console.log('提交', value)
  }

  cateSelect(val) {
    this.setState({cate: val})
    console.log('cate--------------------',val)
  }

  render() {
    return (
      <div className='good-add'>
        <h1>商品添加</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: false, cate: 'b' }}
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
            label="商品价格"
            name="price"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="手机号码"
            name="mobile"
            rules={[{ required: true, pattern: /^[1][0-9]{10}$/, message: '请输入11位的手机号码' }]}
          >
            <Input />
          </Form.Item>

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

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
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
