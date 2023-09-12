import React from "react";

export default function BookFilter({
  filterName,
  filterPrice,
  setFilterName,
  setFilterPrice,
  filterBy,
}) {
  return (
    <div>
      Name
      <input
        type="text"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      Price
      <input
        type="number"
        value={filterPrice}
        onChange={(e) => setFilterPrice(e.target.value)}
      />
      <button onClick={filterBy}>Submit</button>
    </div>
  );
}
