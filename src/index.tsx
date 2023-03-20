import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TechRadar from './components/TechRadar'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <TechRadar quadrants={[]} />
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
