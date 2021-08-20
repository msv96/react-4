import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    history.push("/users");
  };

  return (
    <div>
      <header className="head">Create User</header>
      <form onSubmit={handleSubmit}>
        <div className="d-grid-1">
          <label htmlFor="name1">Name</label>
          <input
            id="name1"
            type="text"
            className="form-control"
            value={name}
            onChange={(el) => {
              setUserName(el.target.value);
            }}
            required
          />
          <label htmlFor="job1">Job</label>
          <input
            id="job1"
            type="text"
            className="form-control"
            value={job}
            onChange={(el) => {
              setPosition(el.target.value);
            }}
            required
          />
          <label htmlFor="avatar1">Avatar</label>
          <input
            avatar="avatar1"
            type="text"
            className="form-control"
            value={avatar}
            onChange={(el) => {
              setOffice(el.target.value);
            }}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn3">
            <FontAwesomeIcon icon={faPlus} size="sm" key="ssa3"></FontAwesomeIcon> Create
          </button>
          <Link to="/users">
            <button type="submit" className="btn3">
              <FontAwesomeIcon icon={faTimes} key="gll0"></FontAwesomeIcon> Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default CreateUser;
