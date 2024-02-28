import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import HomeScreen from './pages/Home.tsx';
import Products from './pages/Products/Index.tsx';
import Stocks from './pages/Stocks/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <HomeScreen />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "stocks",
        element: <Stocks />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
