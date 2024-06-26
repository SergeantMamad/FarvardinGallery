import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import UploadArt from "./pages/UploadArt.jsx"
import LikeProvider from "./providers/LikeProvider.jsx"
import ShowPage from "./pages/ShowPage.jsx"
import Navbar from "./components/Navbar.jsx"
import ShowProducts from "./pages/ShowProducts.jsx"
import Khatati from "./pages/Khatati.jsx"
import Buy from "./pages/Buy.jsx"
import ThankYou from "./pages/ThankYou.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/*" element={<Navbar />} />
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/upload" element={<UploadArt />} />
      <Route path="/showproducts" element={<ShowProducts />} />
      <Route path="/showpage" element={<ShowPage />} />
      <Route path="/khatati" element={<Khatati />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/thankyou" element={<ThankYou />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LikeProvider>
      <RouterProvider router={router} />
    </LikeProvider>
  </React.StrictMode>
)
