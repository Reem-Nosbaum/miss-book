import React from "react";

export default function BookPreview({ book, onSelectBook }) {
  return (
    <div onClick={() => onSelectBook(book.id)}>
      <p> {book.title}</p>
      <p> {book.listPrice.amount}</p>
    </div>
  );
}
