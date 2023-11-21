import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MovieContextProvider } from './Context/MovieContext.jsx'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieContextProvider>
      <App/>
      {/** <Movie /> */}
    </MovieContextProvider>
  </React.StrictMode>,
)
