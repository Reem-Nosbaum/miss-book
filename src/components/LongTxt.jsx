import React, { useState } from "react";

export default function LongTxt({ book }) {
  const [isLongTxtShown, setIsLongTxtShown] = useState(false);

  const toggleText = () => {
    setIsLongTxtShown(!isLongTxtShown);
  };

  const displayedText = isLongTxtShown
    ? book.description
    : book.description.slice(0, 100);

  return (
    <div>
      <p>{displayedText}</p>
      {book.description.length > 100 && (
        <button onClick={toggleText}>
          {isLongTxtShown ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
