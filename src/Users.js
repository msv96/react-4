import { faDownload, faHome } from "@fortawesome/free-solid-svg-icons";
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
    <div className="userlist">
      <header className="head">List of Users</header>
      <Link to="/create-user">
        <button type="submit" className="btn">
          <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Create User
        </button>
      </Link>
      <Link to="/">
        <button type="submit" className="btn">
          <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Dashboard
        </button>
      </Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Job</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {userContext.userList.map((el, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.job}</td>
                  <td>{el.avatar}</td>
                  <td>
                    <Link to={`/edit-user/${index + 1}`} className="btn">
                      Edit
                    </Link>
                    <button
                      className="btn"
                      onClick={() => {
                        handleDelete(index + 1);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;
