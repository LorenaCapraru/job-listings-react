import React, { useState } from "react";

export default function Cards(props) {
  const [search, setSearch] = useState("");
  function handleClickEvent(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  function searchJobs() {
    let newArray = [...props.jobs];
    newArray = newArray.filter(
      (el) =>
        el.role.toLowerCase().includes(search.toLowerCase()) ||
        el.level.toLowerCase().includes(search.toLowerCase()) ||
        el.languages.includes(search.toLowerCase())
    );
    return newArray.map((el) => createCard(el));
  }

  function createCard(card) {
    return (
      <div className={card.featured ? " cardActive" : "card"} key={card.id}>
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
            <div className="DetailsRow2" onClick={handleClickEvent}>
              {card.position}
            </div>
            <div className="DetailsRow3">
              <span className="firstLi">{card.postedAt}</span>{" "}
              <span>{card.contract}</span> <span> {card.location}</span>
            </div>
          </div>
        </div>
        <div className="languages">
          <span>{card.role}</span>
          <span>{card.level}</span> <span>{card.languages}</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={handleClickEvent}
        className="cardLabel"
      />

      <div className="container">
        {/* {search ? searchJobs : props.jobs.map((el) => createCard(el))} */}
        {search.length > 0
          ? searchJobs()
          : props.jobs.map((el) => createCard(el))}
      </div>
    </>
  );
}
