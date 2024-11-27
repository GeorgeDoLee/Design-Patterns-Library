import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Home from './pages/Home';
import AdminPage from './pages/Admin Pages/AdminPage';
import DesignPatternPage from './pages/DesignPatternPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 page not found</div>
  },
  {
    path: '/admin',
    element: <AdminPage />
  },
  {
    path: '/design-pattern/:name/:id',
    element: <DesignPatternPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
