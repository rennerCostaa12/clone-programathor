import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/all.css'

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
)
