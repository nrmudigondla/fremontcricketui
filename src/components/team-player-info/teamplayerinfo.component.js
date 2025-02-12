import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const TeamPlayerInfo = () => {
  const [teamData, setTeamData] = React.useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://localhost:7175/api/Player?Id=" + id)
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
        <Link to={"/team/" + team.id}>{team.name}</Link>
      </td>
      <td>{team.matchesPlayed}</td>
      <td>{team.mom}</td>
      <td>{team.runsScored}</td>
      <td>{team.wicketsTaken}</td>
      <td>{team.umpired}</td>
    </tr>
  ));

  return (
    <div className="container-fluid p-3">
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>Team Information</h2>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Played</th>
                <th>MOM</th>
                <th>Runs</th>
                <th>Wickets</th>
                <th>Umpiring</th>
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
    </div>
  );
};

export default TeamPlayerInfo;
