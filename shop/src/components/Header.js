import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/SearchIcon";
function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <div className="place-1 opensans-bold-downy-30px">
            <Link to="/" className="opensans-bold-downy-30px">
              Home
            </Link>
          </div>

          <div className="shop opensans-bold-downy-30px">
            <Link to="/shop" className="opensans-bold-downy-30px">
              Shop
            </Link>
          </div>

          <div className="gallery opensans-bold-downy-30px">
            <Link to="/gallery" className="opensans-bold-downy-30px">
              Gallery
            </Link>
          </div>
          <div className="blog opensans-bold-downy-30px">
            <Link to="/blog" className="opensans-bold-downy-30px">
              Blog
            </Link>
          </div>

          <div className="contact-us opensans-bold-downy-30px">
            <Link to="/contact" className="opensans-bold-downy-30px">
              Contact Us
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
