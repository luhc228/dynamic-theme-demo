import { useEffect, useState } from 'react';
import './index.css';
import './theme/dark.css';
import './theme/light.css';

export default function App1() {
  const [theme, setTheme] = useState('light');

  function change(theme) {
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
