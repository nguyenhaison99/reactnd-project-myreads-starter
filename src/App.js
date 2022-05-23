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
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <BookListPage books={books} bookshelves={this.bookshelves} />
            }
          />
          <Route path='/search' element={<BookSearchPage books={books} />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
