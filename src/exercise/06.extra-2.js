// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const inputRef = React.useRef()

  const handleSubmit = e => {
    e.preventDefault()
    const value = inputRef.current.value || 'nothing'
    onSubmitUsername(value)
  }

  const handleOnChange = e => {
    const {value} = e.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Username:</label>
          <input
            id="nameInput"
            type="text"
            ref={inputRef}
            onChange={handleOnChange}
          />
        </div>
        <div role="alert" style={{color: 'red'}}>
          {error}
        </div>
        <button type="submit" disabled={error !== null}>
          Submit
        </button>
      </form>
    </>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
