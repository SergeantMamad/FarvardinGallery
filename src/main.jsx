import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import UploadArt from './components/UploadArt.jsx';

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<App />} />
  <Route path='/register' element={<Register />} />
  <Route path='/login' element={<Login />} />
  <Route path='/upload' element={<UploadArt />} />
  </>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
