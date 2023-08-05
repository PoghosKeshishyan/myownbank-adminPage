import React from 'react'
import { Users } from './components/Users'

export function App() {
  return (
    <div className='App'>
      <header>
        <img src='images/logo.png' alt='logo' />
        <h1>Admin Page</h1>
      </header>

      <Users />
    </div>
  )
}
