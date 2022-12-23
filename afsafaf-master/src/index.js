import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Add from './components/Add'
import View from './components/View'
import Edit from './components/Edit'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />
  },
  {
    path: "Add",
    element:<Add />
  },
  {
    path: "View",
    element:<View />
  },
  {
    path: "View/:itemId",
    element:<View />
  },
  {
    path: "Edit",
    element:<Edit />
  },
  {
    path: "Edit/:itemId",
    element:<Edit />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);