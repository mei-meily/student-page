import { MenuItem } from "../Components/MenuItem";
import { Navbar } from "../Components/Navbar";
import { FaUserCircle } from "react-icons/fa";

export const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="user-box">
        {/* <div className="profile-picture"></div> */}
        <FaUserCircle className="profile-picture" />
        <h2>Dipsy</h2>
        <h4 className="number">2398745647</h4>
        <h4 className="lorem">Student</h4>
      </div>

      <div className="menu">
        <MenuItem link="/page1" />
        <MenuItem link="/page2" />
      </div>
    </div>
  );
};
