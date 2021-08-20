import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Dashboard() {
  let usercontent = useContext(UserContext);
  return (
    <>
      <header className="head">Dashboard</header>
      <Link to="/users">
        <button type="submit" className="btn">
          <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon> Full User List
        </button>
      </Link>
      <div className="dashboardlist">
        {usercontent.userList.map((el, index) => {
          return (
            <div>
              <div className="main">
                <h2>{el.name}</h2>
                <img src={el.avatar} alt="avatar" className="img" />
                <p>{el.job}</p>
              </div>
              <Link to={`/edit-user/${index + 1}`}>
                <button type="submit" className="btn">
                  Edit User
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
