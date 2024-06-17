import { useLoaderData } from "react-router-dom";

const Author = () => {
    const blog = useLoaderData()
    return (
        <div>
            {blog.user.name}
        </div>
    );
};

export default Author;