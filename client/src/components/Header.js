import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a
              href="/auth/google"
              className="white waves-effect waves-light btn #ef9a9a-text red-text lighten-3-text"
            >
              Login With Google <i class="material-icons left">login</i>
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px", fontSize: "1.2rem" }}>
            <strong>Credits: {this.props.auth.credits}</strong>
          </li>,
          <li key="2">
            <a
              href="/api/logout"
              className="white waves-effect waves-light btn #ef9a9a-text red-text lighten-3-text"
            >
              Logout
            </a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="left brand-logo"
            >
              FeedBack2you
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
