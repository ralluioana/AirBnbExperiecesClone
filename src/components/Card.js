import React from "react";

export const Card = ({ card }) => {
  const badgeText =
    card.openSpots === 0
      ? "SOLD OUT"
      : card.location === "Online"
      ? "ONLINE"
      : card.openSpots + " Spots Available";

  return (
    <div className="card-element">
      <div className="card-badge">{badgeText}</div>
      <img src={card.image} className="card-photo" alt="cardpic" />

      <div className="card-stats">
        <span className="fa fa-star checked"></span>
        <span> {card.stats.stars}</span>
        <span> ({card.stats.votes}) *</span>
        <span> {card.location}</span>
      </div>
      <p className="card-title">{card.title}</p>
      <h4 className="card-price">{card.price} </h4>
    </div>
  );
};
