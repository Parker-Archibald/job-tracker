import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/LeftNav.css";

class LeftNav extends Component {
  render() {
    return (
      <div>
        <nav id="leftBar">
          <Link to="/">
            <i class="material-icons" id="homeIcon">
              home
            </i>
          </Link>
          <Link to='/jobs'><i class='material-icons' id='descriptionIcon'>description</i></Link>
        </nav>
      </div>
    );
  }
}
export default LeftNav;
