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
import PatternCataloguePage from './pages/PatternCataloguePage';
import ClassificationGuidePage from './pages/ClassificationGuidePage';
import BookPage from './pages/BookPage';

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
    path: '/pattern-catalogue',
    element: <PatternCataloguePage />
  },
  {
    path: '/classification-guide',
    element: <ClassificationGuidePage />
  },
  {
    path: '/book',
    element: <BookPage />
  },
  {
    path: '/design-pattern/:name/:id',
    element: <DesignPatternPage />
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
