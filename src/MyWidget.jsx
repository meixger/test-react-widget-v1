import { useState } from 'react'

function MyWidget() {
  const [count, setCount] = useState(0)
  return (
    <div id='root'>
      <h1 className='title'>My Widget</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default MyWidget
