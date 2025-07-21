import './App.css'
import {  RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { routes } from './routes'

function App() {
  return (
    <div>
    <Toaster position="top-right" />
    <RouterProvider router={routes}/>
    </div>
  )
}

export default App
