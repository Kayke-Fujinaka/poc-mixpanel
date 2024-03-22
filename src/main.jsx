import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import mixpanel from "./services/mixpanel.js";

import './styles/index.css';

mixpanel.identifyUser()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
