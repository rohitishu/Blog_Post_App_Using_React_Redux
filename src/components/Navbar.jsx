import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function Navbar(props) {
  // setTimeout(() => {
  //   props.history.push("/Home");
  // }, 10000);
  return (
    <div>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a className="brand-logo">GoalAchive </a>
          <ul className="right">
            <li>
              {" "}
              <Link to="/Home"> Home </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/Contact">Contact </Link>
            </li>
            <li>
              {" "}
              <Link to="/About"> About </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);
