// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()

  const handleSubmit = e => {
    e.preventDefault()
    const value = inputRef.current.value || 'nothing'
    onSubmitUsername(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nameInput">Username:</label>
        <input id="nameInput" type="text" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
