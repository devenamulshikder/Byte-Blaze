/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blogs from "./Pages/Blogs.jsx";
import BookMarks from "./Pages/BookMarks.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./Pages/Home.jsx";
import Blog from "./Pages/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path:'/blog/:id',
        element:<Blog/>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path: "/bookmarks",
        element: <BookMarks></BookMarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);
