import { Link, NavLink } from "react-router-dom";
import { logout, companies, customers } from "../../../assets/images/icons";
import "./aside.css";

const Aside = () => {
  return (
    <aside>
      <ul className="nav-links">
        <li>
          <NavLink to="/">
            <img src={companies} alt="icon" />
            Nannies
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories">
            <img src={customers} alt="icon" />
            Catagories
          </NavLink>
        </li>
      </ul>

      <Link className="logout-btn" to="/register">
        <img src={logout} alt="logout icon" />
        Logout
      </Link>
    </aside>
  );
};
export default Aside;
