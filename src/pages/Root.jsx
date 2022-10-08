import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../widgets/Footer";

const Root = () => {
  return (
    <div className="content">
      <NavBar />
      <div className="page-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;