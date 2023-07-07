import { useState } from 'react';
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';
import './index.css';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

export default function App4() {
  const [prefixCls, setPrefixCls] = useState('light');
  return (
    <main className={`${prefixCls}`}>
      <ConfigProvider 
        prefixCls={prefixCls}
      >
        <>
          <Button onClick={() => setPrefixCls('light')}>Light</Button>
          <Button type='primary' onClick={() => setPrefixCls('dark')}>Dark</Button>
        </>
        <div>
          <Form.Item {...formItemLayout} label="Name">
            <Input placeholder="Please input your name" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Nickname">
            <Input placeholder="Please input your nickname" />
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Checkbox onClick={() => { }}>
              Nickname is required
            </Checkbox>
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Button type="primary" onClick={() => {}}>
              Check
            </Button>
          </Form.Item>
        </div>
      </ConfigProvider>
    </main>
  )
}
