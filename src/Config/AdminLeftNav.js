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
          <Link to='/Students'><i class='material-icons' id='descriptionIcon'>account_box</i></Link>
        </nav>
      </div>
    );
  }
}
export default LeftNav;
