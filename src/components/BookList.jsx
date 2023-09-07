import React from "react";
import BookPreview from "./BookPreview";

export default function BookList({ books, onSelectBook }) {
  return (
    <div>
      {books.map((book) => {
        return (
          <BookPreview book={book} key={book.id} onSelectBook={onSelectBook} />
        );
      })}
    </div>
  );
}
