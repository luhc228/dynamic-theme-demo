// import './init';
import { useState } from 'react';
import { Button, Checkbox, Form, theme, Input, ConfigProvider } from 'antd';

// import './index.less';
// import './index.css';
// import './theme-backup-1/dark.less';

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
    <ConfigProvider 
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
      // prefixCls={prefixCls}
    >
      <>
        <Button onClick={() => setPrefixCls('antd')}>Light</Button>
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
  )
}
