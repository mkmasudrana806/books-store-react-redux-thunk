import {
  ADDBOOK,
  BOOKEDITSTATUS,
  DELETEBOOK,
  LOADDEDBOOKS,
  UPDATEBOOK,
} from "./actionTypes";

// loaded all the books from the server
export const loadedBooks = (allBooks) => {
  return {
    type: LOADDEDBOOKS,
    payload: allBooks,
  };
};

// add a new book
export const addBook = (newBook) => {
  return {
    type: ADDBOOK,
    payload: newBook,
  };
};

// delete a book
export const deleteBook = (bookId) => {
  return {
    type: DELETEBOOK,
    payload: bookId,
  };
};

// update a book
export const updateBook = (bookId, newBook) => {
  console.log("update book actions", bookId, newBook);
  return {
    type: UPDATEBOOK,
    payload: {
      id: bookId,
      updatedBook: newBook,
    },
  };
};

// edit a book status
export const bookEditStatus = (bookId, book) => {
  return {
    type: BOOKEDITSTATUS,
    payload: {
      id: bookId,
      product: book,
    },
  };
};
