import React from "react";
import datas from "./Data";

function Main() {
  return (
    <>
      {datas.map((el) => {
        return (
          <div className="main">
            <div>{el.id}</div>
            <h3>{el.name}</h3>
            <h5>{el.job}</h5>
            <img src={el.avatar} alt="avatar" />
          </div>
        );
      })}
    </>
  );
}

export default Main;
