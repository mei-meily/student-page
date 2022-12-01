import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Navbar = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="navbar">
      <h2>Hi, Student!</h2>
      <div className="navbar-links">
        {location.pathname === "/" ? (
          <p>logout</p>
        ) : (
          <Link className="link" to="/">
            <h3><FaHome/></h3>
          </Link>
        )}
      </div>
    </div>
  );
};
