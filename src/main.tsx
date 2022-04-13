import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Components/Header'

import './index.css'
import { BuildYourPlan } from './Pages/ArmaTuPlan/BuildYourPlan'
import { Login } from './Pages/Login/Login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ position: 'relative' }}>
      {/* <Header /> */}
      {/* <Login /> */}
      <BuildYourPlan />
    </div>
  </React.StrictMode>
)
