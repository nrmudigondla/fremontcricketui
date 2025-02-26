import React, { useEffect } from "react";
import "./live-scoring.component.css";
import { Link } from "react-router-dom";

const LiveScoring = () => {
  const [matchData, setMatchData] = React.useState([]);
  const [hostTeamData, setHostTeamData] = React.useState([]);
  const [guestTeamData, setGuestTeamData] = React.useState([]);
  const [selectedMatch, setSelectedMatch] = React.useState({});
  const [formData, setFormData] = React.useState({
    battingTeamId: null,
    bowlingTeamId: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    fetch("https://localhost:7175/api/Match")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMatchData(data);
      });
  }, []);

  const handleMatchSelectClick = (id) => {
    setSelectedMatch(matchData.filter((m) => m.id === id)[0]);
    const hostId = matchData.filter((m) => m.id === id)[0].hostTeamId;
    fetch("https://localhost:7175/api/Player?Id=" + hostId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHostTeamData(data);
      });
    const guestId = matchData.filter((m) => m.id === id)[0].guestTeamId;
    fetch("https://localhost:7175/api/Player?Id=" + guestId)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGuestTeamData(data);
      });
  };

  return (
    <div className="container-fluid p-3">
      <div className="container">
        <h1>Live Scoring</h1>
        <br></br>
        <div className="row">
          <h3>Select Match</h3>
          {matchData.map((match) => {
            return (
              <div
                key={match.id}
                className="col-xl-3 col-sm-6 col-12 matchCard"
                onClick={() => handleMatchSelectClick(match.id)}
              >
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex">
                        <div className="media-body text-left">
                          <h3 className="success">{match.guestTeamName}</h3>
                          <h3 className="success">{match.hostTeamName}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br></br>
        <div className="row">
          <h3>Select Playing 11</h3>
          <div className="card col-md-4">
            <h2>{selectedMatch.hostTeamName}</h2>
            {hostTeamData.map((host) => {
              return (
                <div key={host.id} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {host.name}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="col-md-1"></div>
          <div className="card col-md-4">
            <h2>{selectedMatch.guestTeamName}</h2>
            {guestTeamData.map((guest) => {
              return (
                <div key={guest.id} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {guest.name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <br></br>
        <div className="row">
          <h3>Toss Selection & Decision</h3>
        </div>
        <div className="row">
          <label>Toss Won By</label>
          <select className="form-control">
            <option>--Please Select--</option>
            <option value={selectedMatch.hostTeamId}>
              {selectedMatch.hostTeamName}
            </option>
            <option value={selectedMatch.guestTeamId}>
              {selectedMatch.guestTeamName}
            </option>
          </select>
        </div>
        <div className="row">
          <label>Batting Team</label>
          <select
            value={formData.battingTeamId}
            name="battingTeamId"
            onChange={handleChange}
            className="form-control"
          >
            <option>--Please Select--</option>
            <option value={selectedMatch.hostTeamId}>
              {selectedMatch.hostTeamName}
            </option>
            <option value={selectedMatch.guestTeamId}>
              {selectedMatch.guestTeamName}
            </option>
          </select>
        </div>
        <div className="row">
          <label>Bowling Team</label>
          <select
            value={formData.bowlingTeamId}
            name="bowlingTeamId"
            onChange={handleChange}
            className="form-control"
          >
            <option>--Please Select--</option>
            <option value={selectedMatch.hostTeamId}>
              {selectedMatch.hostTeamName}
            </option>
            <option value={selectedMatch.guestTeamId}>
              {selectedMatch.guestTeamName}
            </option>
          </select>
        </div>
        <div className="row">
          <label>Opening Striking Batsmen</label>
          <select className="form-control">
            <option>--Please Select--</option>
            {hostTeamData
              .filter((h) => h.teamId === formData.battingTeamId)
              .map((item) => {
                return <option>{item.name}</option>;
              })}
            {guestTeamData
              .filter((h) => h.teamId === formData.battingTeamId)
              .map((item) => {
                return <option>{item.name}</option>;
              })}
          </select>
        </div>
        <div className="row">
          <label>Opening Non-Striking Batsmen</label>
          <select className="form-control">
            <option>--Please Select--</option>
            {hostTeamData
              .filter((h) => h.teamId === formData.battingTeamId)
              .map((item) => {
                return <option>{item.name}</option>;
              })}
            {guestTeamData
              .filter((h) => h.teamId === formData.battingTeamId)
              .map((item) => {
                return <option>{item.name}</option>;
              })}
          </select>
        </div>
        <div className="row">
          <label>Bowler Name</label>
          <select className="form-control">
            <option>--Please Select--</option>
            {hostTeamData
              .filter((h) => h.teamId === formData.bowlingTeamId)
              .map((item) => {
                return <option>{item.name}</option>;
              })}
            {guestTeamData
              .filter((h) => h.teamId === formData.bowlingTeamId)
              .map((item) => {
                return <option>{item.name}</option>;
              })}
          </select>
        </div>
        <div className="row">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Powerplay
            </label>
          </div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div className="col-md-5"></div>
        <div className="col-md-2">
          <Link to={"/over-score"} className="btn btn-success text-center">
            Start Scoring
          </Link>
        </div>
        <div className="col-md-5"></div>
      </div>
    </div>
  );
};

export default LiveScoring;
