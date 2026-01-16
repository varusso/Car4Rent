import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation-bar">
          <Link to="/">
            <div className="menu-icon">
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </div>
          </Link>
        </div>
    );
}

export default Navigation;
