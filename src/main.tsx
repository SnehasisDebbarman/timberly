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
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Transaction from './pages/Transactions/index.tsx';
import Customers from './pages/Customers/index.tsx';

const queryClient = new QueryClient()

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
        path: "",
        element: <HomeScreen />,
      },
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
      {
        path: "transactions",
        element: <Transaction />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
