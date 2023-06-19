import './index.css';

export default function App1() {
  function change(theme) {
    document.body.className = theme;
  }
  return (
    <>
      <main>
        <div className="box">
          <p>hello</p>
        </div>
      </main>
      <p>
        选择样式：
        <button onClick={() => change('light')}>day</button>
        <button onClick={() => change('dark')}>dark</button>
      </p>
    </>
  )
}
