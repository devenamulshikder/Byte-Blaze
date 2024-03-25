import { Outlet } from "react-router-dom";
// import Blogs from "../Pages/Blogs";
// import BookMarks from "../Pages/BookMarks";
// import Home from "../Pages/Home";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
      </div>
<Outlet></Outlet>
      
    </div>
  );
};

export default MainLayout;
