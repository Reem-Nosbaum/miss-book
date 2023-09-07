import { useEffect, useState } from "react";
import { getBooks } from "../services/getBooks";
import BookList from "./BookList";

function BookApp() {
  const [booksData, setBooksData] = useState(null);
  const [filter, setFilter] = useState(null);
  const [selectBook, setSelectBook] = useState(null);

  async function loadBooks() {
    try {
      const books = await getBooks();
      setBooksData(books);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    loadBooks();
  }, [filter]);

  function onSelectBook(bookId) {
    const book = booksData.find((currBook) => bookId === currBook.id);
    setSelectBook(book);
  }
  return (
    <>
      {booksData ? (
        <BookList books={booksData} onSelectBook={onSelectBook} />
      ) : (
        <p>Loding...</p>
      )}
      {/* <BookFilter
        filterBy={this.state.filterBy}
        onSetFilter={this.onSetFilter}
      />
      <BookList onSelectBook={this.onSelectBook} books={booksToShow} />
      <BookDetails book={selectedBook} onUnSelectBook={this.onUnSelectBook} /> */}
    </>
  );
}

export default BookApp;
