import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookSearchPage from "./components/SearchPage/BookSearchPage";
import BookListPage from "./components/ListPage/BookListPage";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
  };

  render() {
    return (
      <div className='app'>
        <Routes>
          <Route exact path='/' element={<BookListPage />} />
          <Route path='/search' element={<BookSearchPage />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
