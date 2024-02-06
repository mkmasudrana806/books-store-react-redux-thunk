/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BookCart from "./BookCart";
import { useDispatch, useSelector } from "react-redux";
import { loadAllBooks } from "../redux/books/thunk/loadAllBooks";

const BooksContainer = ({ searchQuery }) => {
  const [featured, setFeatured] = useState(false);
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllBooks());
  }, [dispatch]);

  // filter books based on the featured
  let filteredBooks = featured
    ? books?.filter((book) => book.featured === true)
    : books;

  // Filter books based on the search query
  filteredBooks = searchQuery
    ? filteredBooks.filter(
        (book) =>
          book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredBooks;

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setFeatured(false)}
            className={`filter-btn ${!featured ? "active-filter" : ""}`}
            id="lws-filterAll"
          >
            All
          </button>
          <button
            onClick={() => setFeatured(true)}
            className={`filter-btn ${featured ? "active-filter" : ""}`}
            id="lws-filterFeatured"
          >
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {filteredBooks?.map((book) => (
          <BookCart book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default BooksContainer;
