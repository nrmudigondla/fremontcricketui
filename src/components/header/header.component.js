import React from "react";
import ModalPopup from "../modal-popup/modal.component";
import "./header.component.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="fremont-cricket-header">
      <nav class="navbar navbar-expand-lg navbar-dark salmon-color">
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold" to="/">
            Fremont Cricket
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">
                  Teams & Players
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tournament
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="setup-newmatch">
                      Setup New Match
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/live-scoring/"}>
                      LIVE SCORING
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Stats
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link">Documents</Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
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
