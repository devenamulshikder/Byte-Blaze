/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blogs from './Pages/Blogs.jsx'
import BookMarks from './Pages/BookMarks.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {

        path:'/',
        element:<Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/bookmarks",
        element: <BookMarks></BookMarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
