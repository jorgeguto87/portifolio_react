import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './meuComponente.css'
import MeuComponente from './meuComponente.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeuComponente />
  </StrictMode>,
)
