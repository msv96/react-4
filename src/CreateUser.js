import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "./UserContext";

function CreateUser() {
  const [name, setUserName] = useState("");
  const [job, setPosition] = useState("");
  const [avatar, setOffice] = useState("");
  const userContext = useContext(UserContext);
  const history = useHistory();

  let handleSubmit = (el) => {
    el.preventDefault();
    userContext.setUserList([...userContext.userList, { name, job, avatar }]);
    history.push("/user");
  };

  return (
    <div>
      <header className="head">Create User</header>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(el) => {
              setUserName(el.target.value);
            }}
            required
          />
        </div>
        <div className="col-lg-6">
          <label>Job</label>
          <input
            type="text"
            className="form-control"
            value={job}
            onChange={(el) => {
              setPosition(el.target.value);
            }}
            required
          />
        </div>
        <div className="col-lg-6">
          <label>Avatar</label>
          <input
            type="text"
            className="form-control"
            value={avatar}
            onChange={(el) => {
              setOffice(el.target.value);
            }}
            required
          />
        </div>
        <div className="col-lg-12">
          <input type="submit" value="Create" className="btn" />
        </div>
        <Link to="/users">
          <button type="submit" className="btn">
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
}
export default CreateUser;
