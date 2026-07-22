import React from 'react'
import ReactDOM from 'react-dom/client'
import { UiDictionary } from './UiDictionary'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="dictionary-shell">
      <UiDictionary />
    </div>
  </React.StrictMode>,
)
