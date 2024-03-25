import { Outlet } from "react-router-dom";
// import Blogs from "../Pages/Blogs";
// import BookMarks from "../Pages/BookMarks";
// import Home from "../Pages/Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
      </div>
      {/* packet */}

      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
