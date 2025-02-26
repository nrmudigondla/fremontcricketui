import React from "react";
import ModalPopup from "../modal-popup/modal.component";
import "./header.component.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="fremont-cricket-header">
      <nav className="navbar navbar-expand-lg navbar-dark salmon-color">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            Fremont Cricket
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">
                  Teams & Players
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tournament
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="setup-newmatch">
                      Setup New Match
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/live-scoring/"}>
                      LIVE SCORING
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Stats
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Documents</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form> */}
            <div className="navbar-nav">
              <button className="nav-item nav-link">Login</button>
              <button
                className="nav-item nav-link"
                onClick={() => setModalShow(true)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ModalPopup show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Header;
