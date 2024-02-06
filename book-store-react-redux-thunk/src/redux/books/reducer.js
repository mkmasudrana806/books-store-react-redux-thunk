import {
  ADDBOOK,
  DELETEBOOK,
  BOOKEDITSTATUS,
  LOADDEDBOOKS,
  UPDATEBOOK,
} from "./actionTypes";
import { initialState } from "./initialState";

// get maxi id from all books
const getMaxiId = (state) => {
  const maxid = state.reduce((max, book) => Math.max(book.id, max), 0);
  return maxid + 1;
};
// book reducer
export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    // load all books from database
    case LOADDEDBOOKS:
      return {
        ...state,
        books: action.payload,
      };

    // add a new book to books store
    case ADDBOOK:
      return {
        ...state,
        books: [
          ...state.books,
          { ...action.payload, id: getMaxiId(state.books) },
        ],
      };

    // delete a book
    case DELETEBOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    // update a book
    case UPDATEBOOK: {
      return {
        ...state,
        books: state.books.map((book) => {
          if (book.id === action.payload.id) return action.payload.updatedBook;
          else return book;
        }),
      };
    }

    // EDIT status
    case BOOKEDITSTATUS: {
      return {
        ...state,
        editProductId: action.payload.id,
        editProduct: action.payload.product,
      };
    }
    default:
      return state;
  }
};
