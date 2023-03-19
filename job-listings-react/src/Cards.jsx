import React from "react";
// import logos from `${data.map(el=>el.logo)}`;

export default function Cards(props) {
  function createCard(card) {
    return (
      <div className={card.featured ? " cardActive" : "card"}>
        <div className="logo">
          <div className="image">
            <img src={card.logo} alt="company logo" />
          </div>
          <div className="details">
            <div className="DetailsRow1">
              <span className="company">{card.company}</span>{" "}
              {card.new ? <span className="new">NEW!</span> : null}
              {card.featured ? (
                <span className="featured">FEATURED</span>
              ) : null}
            </div>
            <div className="DetailsRow2">{card.position}</div>
            <div className="DetailsRow3">
              <ul>
                <li className="firstLi">{card.postedAt}</li>{" "}
                <li>{card.contract}</li> <li> {card.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="languages">
          <span>{card.role}</span> <span>{card.level}</span>{" "}
          <span>{card.languages}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">{props.jobs.map((el) => createCard(el))}</div>
  );
}
