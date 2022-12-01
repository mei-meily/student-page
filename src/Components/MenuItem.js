import { Link } from "react-router-dom";

export const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <h3>Test</h3>
      <Link to={props.link}>
      <div className="menu-btn">START</div>
      </Link>
    </div>
  );
};
