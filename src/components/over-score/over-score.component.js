import React from "react";
import { Link } from "react-router-dom";

const OverScoreComponent = () => {
  return (
    <div className="container-fluid p-3">
      <div className="container">
        <h1>Live Scoring</h1>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <h3>Score</h3>
            <h3>10/1</h3>
          </div>
          <div className="col-md-6">
            <h3>Overs</h3>
            <h3>2.3/1</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Batsmen Info</h3>
            <h6>NR Mudigondla*(10)</h6>
            <h6>Sam Kudelli*(15)</h6>
          </div>
          <div className="col-md-6">
            <h3>Bowler Info</h3>
            <h6>NR(2-15-2)</h6>
          </div>
        </div>
        <div className="row">
          <h3>Runs in this over</h3>
          <div className="col-sm-1">
            <b>0.1</b>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-1">
            <b>0.2</b>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-1">
            <b>0.3</b>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-1">
            <b>0.4</b>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-1">
            <b>0.5</b>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-1">
            <b>0.6</b>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-6"></div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm-2">
            <h3>EXTRAS</h3>
            <button className="btn btn-primary col-6 m-2">Wide</button>
            <br></br>
            <button className="btn btn-primary col-6 m-2">No Ball</button>
            <br></br>
            <button className="btn btn-primary col-6 m-2">Bye</button>
            <br></br>
            <button className="btn btn-primary col-6 m-2">Leg Bye</button>
            <br></br>
            <button className="btn btn-primary col-6 m-2">No Extras</button>
          </div>
          <div className="col-sm-2">
            <h3>Wicket</h3>
            <button className="btn btn-primary col-6 m-2">Out</button>
            <br></br>
            <button className="btn btn-primary col-6 m-2">Run Out</button>
            <br></br>
            <button className="btn btn-primary col-6 m-2">Retired Out</button>
            <br></br>
            <button className="btn btn-primary col-6 m-2">Not Out</button>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div className="col-md-3"></div>
        <div className="col-md-1">
          <Link to={"/over-score"} className="btn btn-success text-center">
            Submit Over
          </Link>
        </div>
        <div className="col-md-1">
          <Link to={"/over-score"} className="btn btn-success text-center">
            Change Strike
          </Link>
        </div>
        <div className="col-md-1">
          <Link to={"/over-score"} className="btn btn-success text-center">
            Submit Bowler
          </Link>
        </div>
        <div className="col-md-1">
          <Link to={"/over-score"} className="btn btn-success text-center">
            End Match
          </Link>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default OverScoreComponent;
