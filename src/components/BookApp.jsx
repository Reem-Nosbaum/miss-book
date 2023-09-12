import { useEffect, useRef, useState } from "react";
import { getBooks } from "../services/getBooks";
import BookList from "./BookList";
import BookDetails from "./BookDetails";
import BookFilter from "./BookFilter";

function BookApp() {
  const [booksData, setBooksData] = useState(null);
  const [selectBook, setSelectBook] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const books = useRef([]);

  async function loadBooks() {
    try {
      const booksRes = await getBooks();
      books.current = booksRes;

      setBooksData(booksRes);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    loadBooks();
  }, []);
  console.log(books);
  function onSelectBook(bookId) {
    const book = booksData.find((currBook) => bookId === currBook.id);
    setSelectBook(book);
    console.log(bookId);
  }

  function filterBy() {
    let filteredBooks = [...booksData];

    if (filterName) {
      filteredBooks = filteredBooks.filter((book) =>
        book.title.includes(filterName)
      );
    }

    if (filterPrice) {
      filteredBooks = filteredBooks.filter((book) =>
        book.listPrice.amount.toString().includes(filterPrice)
      );
    }

    setBooksData(filteredBooks);
  }
  return (
    <>
      <BookFilter
        filterName={filterName}
        filterPrice={filterPrice}
        setFilterName={setFilterName}
        setFilterPrice={setFilterPrice}
        filterBy={filterBy}
      />
      {booksData ? (
        // <BookList books={booksData} onSelectBook={onSelectBook}  />
        <BookList books={booksData} onSelectBook={onSelectBook} />
      ) : (
        <p>Loding...</p>
      )}
      {selectBook && <BookDetails book={selectBook} />}
    </>
  );
}

export default BookApp;
