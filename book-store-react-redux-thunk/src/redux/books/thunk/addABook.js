 
import { addBook } from "../actions";

export const addABook = (newBook) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(newBook),
    });
    const book = await response.json();

    // after save into database, now store into redux store
    dispatch(addBook(book));
  };
};
