import { useEffect, useState } from "react";
import { bookEditStatus } from "../redux/books/actions";
import { useDispatch, useSelector } from "react-redux";
import { addABook } from "../redux/books/thunk/addABook";
import { updateABook } from "../redux/books/thunk/updateABook";

const AddBook = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.books);
  const initialState = {
    name: "",
    author: "",
    imageUrl: "",
    price: "",
    rating: "",
    featured: false,
  };
  const [book, setBook] = useState(initialState);

  // update the form when edit a product is clicked
  useEffect(() => {
    if (bookStore.editProductId) {
      // Update only the fields that need to be updated
      setBook((prevBook) => ({
        ...prevBook,
        ...bookStore.editProduct,
      }));
    }
  }, [bookStore]);

  // add a new book
  const handleAddBook = (e) => {
    e.preventDefault();
    setBook(initialState);
    if (!bookStore.editProductId) {
      dispatch(addABook(book));
    } else {
      dispatch(updateABook(bookStore.editProductId, book));
      dispatch(bookEditStatus("", {}));
    }
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={handleAddBook} className="book-form">
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              value={book.name}
              onChange={(e) =>
                setBook((prev) => ({ ...prev, name: e.target.value }))
              }
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              value={book.author}
              onChange={(e) =>
                setBook((prev) => ({ ...prev, author: e.target.value }))
              }
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              value={book.imageUrl}
              onChange={(e) =>
                setBook((prev) => ({ ...prev, imageUrl: e.target.value }))
              }
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                value={book.price}
                onChange={(e) =>
                  setBook((prev) => ({ ...prev, price: e.target.value }))
                }
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                value={book.rating}
                onChange={(e) =>
                  setBook((prev) => ({ ...prev, rating: e.target.value }))
                }
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              checked={book.featured}
              onChange={(e) =>
                setBook((prev) => ({ ...prev, featured: e.target.checked }))
              }
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {bookStore.editProductId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
