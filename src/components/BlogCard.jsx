/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";
const BlogCard = ({ blog, deleteble, handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;
 
  return (
    <div className=" flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 duration-300 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deleteble && (
        <div onClick={()=>handleDelete(id)} className="absolute bg-primary p-3 n rounded-full hover:scale-105 -top-5 right-20 hover:bg-secondary group cursor-pointer">
          <MdDeleteForever
            size={20}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
