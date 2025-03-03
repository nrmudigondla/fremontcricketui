import React, { useEffect } from "react";
import ModalPopup from "../modal-popup/modal.component";

const Home = () => {
  const [playerData, setPlayerData] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    fetch("https://localhost:7175/api/Player/GetAllPlayers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlayerData(data);
      });
  }, []);

  const listItems = playerData.map((player) => (
    <tr key={player.number}>
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" id="checkbox1" name="options[]" value="1" />
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      {/* <td>{player.number}</td> */}
      <td>{player.firstName}</td>
      <td>{player.lastName}</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
          Edit &nbsp;
        </a>
        <a href="#deleteEmployeeModal" className="edit" data-toggle="modal">
          Delete
        </a>
      </td>
    </tr>
  ));

  return (
    <div className="container-fluid p-3">
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>All Players Information</h2>
              </div>
              <div className="col-sm-6">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  onClick={() => setModalShow(true)}
                >
                  <span>Register New Player</span>
                </button>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <span className="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label htmlFor="selectAll"></label>
                  </span>
                </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>{listItems}</tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <ul className="pagination">
              <li className="page-item disabled">
                <button className="page-link" href="#">
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button href="#" className="page-link">
                  1
                </button>
              </li>
              <li className="page-item">
                <button href="#" className="page-link">
                  2
                </button>
              </li>
              <li className="page-item active">
                <button href="#" className="page-link">
                  3
                </button>
              </li>
              <li className="page-item">
                <button href="#" className="page-link">
                  4
                </button>
              </li>
              <li className="page-item">
                <button href="#" className="page-link">
                  5
                </button>
              </li>
              <li className="page-item">
                <button href="#" className="page-link">
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ModalPopup show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Home;
