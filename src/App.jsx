import './App.css'
import {  RouterProvider } from 'react-router-dom'
import { routes } from '../routes'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
    <Toaster position="top-right" />
    <RouterProvider router={routes}/>
    </div>
  )
}

export default App
