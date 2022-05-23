import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
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
    BooksAPI.update(book, shelf).then((books) => {
      // console.log(books);
    });
    const updatedBooks = this.state.books.map((b) => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    });

    this.setState({
      books: updatedBooks,
    });
  };

  searchForBooks = (query) => {
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
  };

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
