import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header/Header'

import './index.css'
import { BuildYourPlan } from './Pages/BuildYourPlan/BuildYourPlan'
import { Login } from './Pages/Login/Login'
import { NotFound } from './Pages/NotFound/NotFound'
import { Thanks } from './Pages/Thanks/Thanks'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ position: 'relative' }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Login />} />
          <Route path="arma-tu-plan" element={<BuildYourPlan />}></Route>
          <Route path="pagina-gracias" element={<Thanks />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  </React.StrictMode>
)
