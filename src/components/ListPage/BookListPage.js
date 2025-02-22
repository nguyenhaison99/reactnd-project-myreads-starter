import React, { Component } from "react";
import BookShelves from "./BookShelves";
import { OpenSearch } from "./OpenSearch";

export default class BookListPage extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <BookShelves bookshelves={bookshelves} books={books} onMove={onMove} />
        <OpenSearch />
      </div>
    );
  }
}
