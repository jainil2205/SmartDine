import { NavLink } from "react-router-dom";
import img from "../assets/Asset 20@4x.png";

function Footer() {
  return (
    <footer className="shadow-inner">

      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <NavLink to="/" className="flex items-center">

          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
