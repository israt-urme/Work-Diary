/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function NavDrawer(props) {
  return (
    <div>
      <nav
        className="navbar navbar-dark bg-dark" /*style={{backgroundColor: 'blue'}}*/
      >
        <a className="navbar-brand" href="/">
          DIARY
        </a>
        {props.isAuthenticated ? (
          <Link to="/logout">
            <button className="btn btn-warning my-2 my-sm-0" type="submit">
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              className="btn my-2 my-sm-0"
              type="submit"
              style={{ background: "sky" }}
            >
              Login
            </button>
          </Link>
        )}
      </nav>
      <br />
      {props.children}
    </div>
  );
}

export default NavDrawer;
