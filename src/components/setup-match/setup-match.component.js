import React, { useEffect } from "react";

const SetUpMatchComponent = () => {
  const [teamData, setTeamData] = React.useState([]);
  const [formData, setFormData] = React.useState({
    hostTeamId: '',
    guestTeamId: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:7175/api/Match", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => console.log(response))
      .then((data) => {
        alert("Match created!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch("https://localhost:7175/api/Team")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTeamData(data);
      });
  }, []);

  return (
    <div class="container form-box">
      <h1>Set Up New Match</h1>
      <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
        <div class="form-group">
          <label for="name">Hosting Team</label>
          <select onChange={handleChange} name="hostTeamId" value={formData.hostTeamId} class="form-control">
            <option>--Please Select--</option>
            {
                teamData.map((option) => {
                    return <option value={option.id}>{option.teamName}</option>
                })
            }
          </select>
        </div>
        <div class="form-group">
          <label for="name">Guest Team</label>
          <select onChange={handleChange} name="guestTeamId" value={formData.guestTeamId} class="form-control">
            <option>--Please Select--</option>
            {
                teamData.map((option) => {
                    return <option value={option.id}>{option.teamName}</option>
                })
            }
          </select>
        </div>
        <br />
        <input class="btn btn-primary" onClick={handleSubmit} type="button" value="Submit" />
      </form>
    </div>
  );
};

export default SetUpMatchComponent;
