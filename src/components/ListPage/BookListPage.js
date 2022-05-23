import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const OpenSearchBtn = () => {
  return (
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  );
};

export default class BookListPage extends Component {
  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <BookShelf />
        <OpenSearchBtn />
      </div>
    );
  }
}
