import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const appLayOut = createBrowserRouter([{
  path: "/",
  element: <Main />,
  children: [{
    path: "/",
    element: <App />
  },

  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appLayOut} />
)
export default Main