import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalPopup = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    emailAddress: "",
    userName: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:7175/api/User", {
      method: "POST",
      body: JSON.stringify({ firstName: formData.firstName, lastName: formData.lastName, emailAddress: formData.emailAddress, userName: formData.userName, password: formData.password, phoneNumber: formData.phoneNumber }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => console.log(response))
      .then((data) => {
        alert("user created!");
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
          Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="tatEmailAddress">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              aria-describedby="fnHelp"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              aria-describedby="lnHelp"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtPhoneNumber">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              aria-describedby="pnHelp"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="text"
              className="form-control"
              name="emailAddress"
              aria-describedby="fnHelp"
              placeholder="Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              aria-describedby="fnHelp"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              aria-describedby="emailHelp"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
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

export default ModalPopup;
