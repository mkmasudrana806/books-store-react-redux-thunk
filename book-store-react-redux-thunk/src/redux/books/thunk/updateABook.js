import { updateBook } from "../actions";

export const updateABook = (id, updatedBook) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(updatedBook),
    });
    const res = await response.json();
    dispatch(updateBook(res.id, res));
  };
};
