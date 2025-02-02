import React, { useEffect } from "react";
import "./home.component.css";
import AddTeamModalPopup from "../modal-popup/add-team-modal.component";

const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [teamData, setTeamData] = React.useState([]);

  useEffect(() => {
    fetch("https://localhost:7175/api/Team")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTeamData(data);
      });
  }, []);

  const listItems = teamData.map((team) => (
    <tr key={team.id}>
      <td>
        <span className="custom-checkbox">
          <input type="checkbox" id="checkbox1" name="options[]" value="1" />
          <label htmlFor="checkbox1"></label>
        </span>
      </td>
      <td>{team.teamName}</td>
      <td>{teamData.filter(t=>t.hostTeamId === t.id || t.guestTeamId === t.id).length}</td>
      <td>{teamData.filter(t=>t.matchWonBy === t.id).length}</td>
      <td>0</td>
      <td>{teamData.filter(t=>t.matchWonBy === t.id).length}</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
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
                <h2>All Teams Information</h2>
              </div>
              <div className="col-sm-6">
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  onClick={() => setModalShow(true)}
                >
                  <span>Register New Team</span>
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
                <th>Team Name</th>
                <th>Played</th>
                <th>Won</th>
                <th>Tie</th>
                <th>Lost</th>
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
          <AddTeamModalPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
