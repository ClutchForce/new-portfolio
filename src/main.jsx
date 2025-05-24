/**
 * By Paul Gherghel
 * 
 * To run app locally:
 * 1. Clone the repository
 * 2. Install dependencies using npm install
 * 3. Start the development server using `npm run dev`
 * 
 * To make commits to the repository:
 * 1. Add export GITHUB_TOKEN=[ghp_token] to your .env file
 * 2. Run the following in the terminal:
 *    source .env
 *    git push https://ClutchForce:$GITHUB_TOKEN@github.com/ClutchForce/new-portfolio.git main
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
