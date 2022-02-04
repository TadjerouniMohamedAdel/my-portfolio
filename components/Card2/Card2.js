import React from "react";

export default function Card2(props) {
  return (
    <div className="course">
      {/* <div className="preview">
        <h2>
          <i className={props.icon}></i>
          <br />
          {props.title}
        </h2>
      </div> */}
      <div className="info">
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
}
