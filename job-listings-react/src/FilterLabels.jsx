import React from "react";

export default function FilterLabels() {
  function filterResults() {
    let filterArray = ["lala", "dada"];
    return filterArray.map((index, el) => (
      <div className="label" key={index}>
        <span className="filter">
          {filterArray[el]}
          <span className="filterX">X</span>
        </span>
      </div>
    ));
  }
  return <div className="cardLabel">{filterResults()}</div>;
}
