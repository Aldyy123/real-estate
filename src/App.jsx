import React from 'react'
import './Assets/Styles/App.scss'
import { useRoutes } from 'react-router-dom'
import router from './routes/router'

function App () {
  const routes = useRoutes(router())
  return (
    <div className="App">
      {routes}
    </div>
  )
}

export default App
