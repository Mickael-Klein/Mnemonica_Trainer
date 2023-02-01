import React from "react";
import "./Card.scss";

export default function Card({ idOfCard, value, suit, showId }) {
  return (
    <div className="card">
      {showId && <div className="card__id">{idOfCard}</div>}
      <div className="card__content">
        <div className="value">{value}</div>
        <div className="suit">{suit}</div>
      </div>
    </div>
  );
}
