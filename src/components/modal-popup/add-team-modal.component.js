import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddTeamModalPopup = (props) => {
  const [formData, setFormData] = useState({
    teamName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:7175/api/Team", {
      method: "POST",
      body: JSON.stringify({ teamName: formData.teamName }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => console.log(response))
      .then((data) => {
        alert("team created!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title name="contained-modal-title-vcenter">
          Team Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="tatEmailAddress">Team Name</label>
            <input
              type="text"
              className="form-control"
              name="teamName"
              aria-describedby="fnHelp"
              placeholder="Team Name"
              value={formData.teamName}
              onChange={handleChange}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Register
        </button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTeamModalPopup;
