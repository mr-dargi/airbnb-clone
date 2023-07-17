import React from "react";


export default function Card(props) {

  let badgeTxt;
  if(props.item.openSpots === 0) {
    badgeTxt = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeTxt = "ONLINE";
  }

  return (
    <div className="card">
      {badgeTxt !== undefined && <div className="card-badge">{badgeTxt}</div>}
      <img src={"./images/" + props.item.coverImg} className="card-img" />
      <div className="stat">
        <img src="./images/star.png" className="star" />
        <span>{props.item.stats.rating}</span>
        <span>({props.item.stats.reviewCount}) . {props.item.location}</span>
      </div>
      <h5>{props.item.title}</h5>
      <p>
        <b>From ${props.item.price}</b> / person
      </p>
    </div>
  )
}