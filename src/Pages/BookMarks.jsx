import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";

const BookMarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = id=>{
    deleteBlogs(id)
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }
  return (
    <div className="grid justify-center px-4 sm:px-8 lg:px-12 py-8 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard handleDelete={handleDelete} deleteble={true} blog={blog} key={blog.id}></BlogCard>
      ))}
    </div>
  );
};

export default BookMarks;
