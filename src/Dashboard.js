import { faListAlt, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faListAlt} key="sdh7"></FontAwesomeIcon> Full
          User List
        </button>
      </Link>
      <Link to="/create-user">
        <button type="submit" className="btn">
          <FontAwesomeIcon icon={faPlus} key="hsj8"></FontAwesomeIcon> Create
          User
        </button>
      </Link>
      <div className="dashboardlist">
        {usercontent.userList.map((el, index) => {
          return (
            <>
              <div className="main">
                <div className="bodytag">
                  <h3>{el.name}</h3>
                  <img src={el.avatar} alt="avatar" className="img" />
                  <p>{el.job}</p>
                </div>
                <Link to={`/edit-user/${index + 1}`}>
                  <button type="submit" className="btn4">
                    <FontAwesomeIcon
                      icon={faPen}
                      size="sm"
                      key={index * 5 + 1000}
                    ></FontAwesomeIcon>{" "}
                    Edit User
                  </button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
