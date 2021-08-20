import {
  faHome,
  faPen,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Users() {
  const userContext = useContext(UserContext);

  let handleDelete = (index) => {
    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      userContext.userList.splice(index - 1, 1);
      userContext.setUserList([...userContext.userList]);
    }
  };

  return (
    <div>
      <header className="head">List of Users</header>
      <Link to="/">
        <button type="submit" className="btn">
          <FontAwesomeIcon icon={faHome} key="dsad4"></FontAwesomeIcon>{" "}
          Dashboard
        </button>
      </Link>
      <Link to="/create-user">
        <button type="submit" className="btn">
          <FontAwesomeIcon icon={faPlus} key="asfgf"></FontAwesomeIcon> Create
          User
        </button>
      </Link>
      <div className="userlist">
        <div className="d-grid headtag">
          <div>ID</div>
          <div>NAME</div>
          <div>JOB</div>
          <div>AVATAR</div>
          <div>ACTION</div>
        </div>
        {userContext.userList.map((el, index) => {
          return (
            <div className="d-grid">
              <div>{index + 1}</div>
              <div className="item">{el.name}</div>
              <div className="item">{el.job}</div>
              <div className="item">{el.avatar}</div>
              <div>
                <Link to={`/edit-user/${index + 1}`}>
                  <button type="submit" className="btn1">
                    <FontAwesomeIcon
                      icon={faPen}
                      size="sm"
                      key={index * 2 + 100}
                    ></FontAwesomeIcon>{" "}
                    Edit
                  </button>
                </Link>
                <button
                  className="btn2"
                  onClick={() => {
                    handleDelete(index + 1);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    key={index * 3 + 200}
                  ></FontAwesomeIcon>{" "}
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Users;
