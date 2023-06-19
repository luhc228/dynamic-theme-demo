import { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';

// import './index.less';
// import './index.css';
// import './theme-backup-1/dark.less';
import 'antd/dist/antd.variable.css';

import themes from './theme';
console.log(themes)
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

export default function App4() {
  const [theme, setTheme] = useState('light');

  function change(theme) {
    const root = document.querySelector('html');  // querySelector(':root')
    const themeColors = themes[theme];
    Object.keys(themeColors).forEach(key => {
      root.style.setProperty(key, themeColors[key])
    })
    
    document.body.style.setProperty('color', theme === 'light' ? '#000' : '#fff');
    document.body.style.setProperty('background', theme === 'light' ? '#fff' : '#000');
  }
  
  useEffect(() => {
    change(theme);
  }, [theme])
  return (
    <main>
      <ConfigProvider>
        <>
          <Button onClick={() => setTheme('light')}>Light</Button>
          <Button type='primary' onClick={() => setTheme('dark')}>Dark</Button>
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
