import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <header className="navbar-container">
        <nav className="navbar">
          <div className="logo">
            <span className="accent">My</span>Blog.
          </div>
          <ul className="nav-links">
            <Link to={"/"}>
              <li className="nav-link active-link">All Posts</li>
            </Link>
            <Link to={"/tags"}>
              <li className="nav-link">Tags</li>
            </Link>
            <Link to={"/categories"}>
              <li className="nav-link">Categories</li>
            </Link>
          </ul>
        </nav>
        <div className="border"></div>
      </header>
      <Outlet />
    </>
  );
};
export default Navigation;
