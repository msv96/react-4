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
    history.push("/user");
  };

  return (
    <div>
      <header className="head">Edit User</header>
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
          <label>Position</label>
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
          <label>Office</label>
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
          <input type="submit" value="Edit" className="btn btn-primary mt-3" />
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
export default EditUser;
