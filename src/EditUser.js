import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "./UserContext";

function EditUser(props) {
  const [name, setUserName] = useState("");
  const [job, setPosition] = useState("");
  const [avatar, setOffice] = useState("");
  const userContext = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    let userData = userContext.userList[props.match.params.id - 1];
    setUserName(userData.name);
    setPosition(userData.job);
    setOffice(userData.avatar);
  }, [props.match.params.id, userContext]);

  let handleSubmit = (el) => {
    el.preventDefault();
    userContext.userList[props.match.params.id - 1] = { name, job, avatar };
    userContext.setUserList([...userContext.userList]);
    history.push("/users");
  };

  return (
    <>
      <div className="headtag">
        <header className="head">Edit User</header>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="d-grid-1">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(el) => {
              setUserName(el.target.value);
            }}
            required
          />
          <label htmlFor="job">Job</label>
          <input
            id="job"
            type="text"
            value={job}
            onChange={(el) => {
              setPosition(el.target.value);
            }}
            required
          />
          <label htmlFor="avatar">Avatar</label>
          <input
            id="avatar"
            type="text"
            value={avatar}
            onChange={(el) => {
              setOffice(el.target.value);
            }}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit" className="btn3">
            <FontAwesomeIcon icon={faPen} size="sm" key="dj9"></FontAwesomeIcon>{" "}
            Edit
          </button>
          <Link to="/users">
            <button type="submit" className="btn3">
              <FontAwesomeIcon icon={faTimes} key="js9"></FontAwesomeIcon>{" "}
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
export default EditUser;
