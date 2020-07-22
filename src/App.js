import React from 'react'
import './App.css'
import SideBar from './components/SideBar'
import CenterPanel from './components/CenterPanel'
import UserPanel from './components/UserPanel'

function App() {
  return (
    <div className='App'>
      <div className='card'>
        <SideBar />
        <CenterPanel />
        <UserPanel />
      </div>
    </div>
  )
}

export default App
