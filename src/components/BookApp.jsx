import { useEffect, useState } from "react";
import { getBooks } from "../services/getBooks";
import BookList from "./BookList";
import BookDetails from "./BookDetails";

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
    console.log(bookId);
  }
  return (
    <>
      {booksData ? (
        <BookList books={booksData} onSelectBook={onSelectBook} />
      ) : (
        <p>Loding...</p>
      )}
      {selectBook && <BookDetails book={selectBook} />}
    </>
  );
}

export default BookApp;
