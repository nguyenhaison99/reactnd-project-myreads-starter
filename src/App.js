import React from "react";
import { Routes, Route } from "react-router-dom";
import { debounce } from "throttle-debounce";

import * as BooksAPI from "./BooksAPI";
import BookSearchPage from "./components/SearchPage/BookSearchPage";
import BookListPage from "./components/ListPage/BookListPage";
import "./App.css";

class BooksApp extends React.Component {
  bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Have Read" },
  ];

  state = {
    books: [],
    searchBooks: [],
  };

  moveBook = (book, shelf) => {
    // update db
    BooksAPI.update(book, shelf);

    let updatedBooks = [];
    updatedBooks = this.state.books.filter((b) => b.id !== book.id);

    if (shelf !== "none") {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState({
      books: updatedBooks,
    });
  };

  searchForBooks = debounce(300, (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });

  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    const { books, searchBooks } = this.state;
    return (
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <BookListPage
                books={books}
                bookshelves={this.bookshelves}
                onMove={this.moveBook}
              />
            }
          />
          <Route
            path='/search'
            element={
              <BookSearchPage
                books={books}
                searchBooks={searchBooks}
                onMove={this.moveBook}
                onSearch={this.searchForBooks}
                onResetSearch={this.resetSearch}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
