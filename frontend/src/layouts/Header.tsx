import { Link } from "react-router-dom";
import logo from "../assets/icons/buena-logo.svg";

const Header = () => {
  return (
    <div className="h-20">
      <nav className="flex px-5 py-5 items-center justify-between">
        <Link to="/">
          <img className="h-6" src={logo} alt="Buena" />
        </Link>
      </nav>
    </div>
  );
}

export default Header