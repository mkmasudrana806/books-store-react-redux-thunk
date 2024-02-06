import { loadedBooks } from "../actions";

export const loadAllBooks = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books");
    const books = await response.json();
    dispatch(loadedBooks(books));
  };
};
