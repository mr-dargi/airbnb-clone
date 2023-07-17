import React from "react";


export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src="./images/katie-zaferes.png" className="card-img" />
      <div className="stat">
        <img src="./images/star.png" className="star" />
        <span>5.0</span>
        <span>(6) . USA</span>
      </div>
      <h5>Life lessons with Katie Zaferes</h5>
      <p>
        <b>From $136</b> / person
      </p>
    </div>
  )
}