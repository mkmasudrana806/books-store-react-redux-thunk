import { useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import BooksContainer from "./components/BooksContainer";
import Navbar from "./components/Navbar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BooksContainer searchQuery={searchQuery} />
          <AddBook />
        </div>
      </main>
    </div>
  );
}

export default App;
