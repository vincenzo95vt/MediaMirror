import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContainer from './containers/MainContainer/MainContainer'

function App() {
  return (
    <div className='root-cnt'>
      <div className='cnt-title'>
        <h1 className='ttle1'>Media</h1><h1 className='ttle2'>Mirror.</h1> 
      </div>
      <MainContainer/>
    </div>
  )
}

export default App
