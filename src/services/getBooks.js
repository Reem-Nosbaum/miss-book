import books from "../assets/books.json";
export const getBooks = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(books);
    }, 1000);
  });
};
