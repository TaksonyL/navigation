import { useState } from 'react'
import IndexView from './view/index'
import './app.less';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">
      <IndexView />
    </div>
  )
}

export default App
