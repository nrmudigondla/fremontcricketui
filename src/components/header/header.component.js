import React from "react";
import ModalPopup from "../modal-popup/modal.component";
import "./header.component.css";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="fremont-cricket-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-brand">Fremont Cricket</button>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <button className="nav-item nav-link active">
                Teams & Players
              </button>
              <button className="nav-item nav-link">Tournament</button>
              <button className="nav-item nav-link">Stats</button>
              <button className="nav-item nav-link disabled" tabIndex="-1">
                Documents
              </button>
            </div>
            <div className="navbar-nav ms-auto">
              <button className="nav-item nav-link">Login</button>
              <button className="nav-item nav-link" onClick={() => setModalShow(true)}>Register</button>
            </div>
          </div>
        </div>
      </nav>
      <ModalPopup show={modalShow}
        onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Header;
