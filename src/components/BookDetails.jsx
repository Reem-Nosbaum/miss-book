import React from "react";
import LongTxt from "./LongTxt";

export default function BookDetails({ book }) {
  function pageCountBook() {
    if (book.pageCount > 500) return "Longreading";
    if (book.pageCount > 200) return "DecentReading";
    if (book.pageCount < 100) return "LightReading";
  }

  function PublishedDateBook() {
    if (book.publishedDate > 10) return "VeteranBook";
    if (book.publishedDate < 1) return "New!";
  }

  function OnSale() {
    if (book.listPrice.isOnSale) return <h1>the book is on sale!!</h1>;
  }

  return (
    <div
      style={
        book.listPrice.amount > 150
          ? { color: "red" }
          : book.listPrice.amount < 20
          ? { color: "green" }
          : {}
      }
    >
      <LongTxt book={book} />
      BookDetails {book.pageCount}, {pageCountBook()},
      {(PublishedDateBook(), OnSale())}
    </div>
  );
}
