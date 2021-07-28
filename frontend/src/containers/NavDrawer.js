/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

function NavDrawer(props) {
  return (
    <div>
      <nav
        class="navbar navbar-dark bg-dark" /*style={{backgroundColor: 'blue'}}*/
      >
        <a class="navbar-brand" href="/">
          DIARY
        </a>
        {props.isAuthenticated ? (
          <Link to="/logout">
            <button class="btn btn-warning my-2 my-sm-0" type="submit">
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              class="btn my-2 my-sm-0"
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
