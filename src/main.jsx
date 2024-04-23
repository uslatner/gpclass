import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// CHOICE: Compiled CSS file & raw SCSS file (no difference)
// import './style/index.css'
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)