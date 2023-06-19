import { useEffect, useState } from 'react';
import './index.css';
import darkTheme from './theme/dark';
import lightTheme from './theme/light';

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

export default function App1() {
  const [theme, setTheme] = useState('light');

  // 修改 :root 根节点的样式
  function change(theme) {
    const root = document.querySelector(':root');
    const themeColors = themes[theme];
    Object.keys(themeColors).forEach(key => {
      root.style.setProperty(key, themeColors[key])
    })
    document.body.className = theme;
  }
  
  useEffect(() => {
    change(theme);
  }, [theme])
  return (
    <>
      <div className="box">
        <p>hello</p>
      </div>
      <p>
        选择样式：
        <button onClick={() => setTheme('light')}>day</button>
        <button onClick={() => setTheme('dark')}>dark</button>
      </p>
    </>
  )
}
