import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../data";

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="heading-background">PLS SAY YES</h1>
        <header>
          <h1>
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </h1>
        </header>
        <Fade bottom>
          <p className="header-title">
            {data.headerTagline[0]}
            <br></br>
            {data.headerTagline[1]}
            <br></br>
            <button>
              <a href={`mailto:${data.contactEmail}`}>Contact</a>
            </button>
          </p>
        </Fade>
      </div>
    );
  }
}

export default Header;
