import React from "react";
// import logos from `${data.map(el=>el.logo)}`;

export default function Cards(props) {
  function createCard(card) {

    return (
      <div className="card">
        <div className="logo">
          <div className="image">
            <img src={card.logo} alt="company logo" />
          </div>
          <div className="details">
            <div className="DetailsRow1">
              {card.company} {card.new} {card.featured}
            </div>
            <div className="DetailsRow2">{card.position}</div>
            <div className="DetailsRow3">
              {card.postedAt} {card.contract} {card.location}
            </div>
          </div>
        </div>
        <div className="languages">
          {card.role} {card.level} {card.languages}{" "}
        </div>
      </div>
    );
  }

  return (
    <div className="container">{props.jobs.map((el) => createCard(el))}</div>
  );
}
