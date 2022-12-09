import React from "react";
import { Card } from "./Card";

export const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
