import React from "react";


export default function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <img src={"./images/" + props.item.coverImg} className="card-img" />
      <div className="stat">
        <img src="./images/star.png" className="star" />
        <span>{props.item.stats.rating}</span>
        <span>({props.item.stats.reviewCount}) . USA</span>
      </div>
      <h5>{props.item.title}</h5>
      <p>
        <b>From ${props.item.price}</b> / person
      </p>
    </div>
  )
}