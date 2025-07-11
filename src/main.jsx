import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers'

createRoot(document.getElementById('root')).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
   <Provider store={store}>
    <App />
  </Provider> 
  </LocalizationProvider>
)
