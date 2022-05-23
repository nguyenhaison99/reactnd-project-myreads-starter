import React, { Component } from "react";
import BookShelf from "./BookShelf";

export default class BookShelves extends Component {
  render() {
    const { bookshelves, books } = this.props;

    return (
      <div className='list-books-content'>
        <div>
          {bookshelves.map((bookshelf) => (
            <BookShelf
              key={bookshelf.key}
              bookshelf={bookshelf}
              books={books}
            />
          ))}
        </div>
      </div>
    );
  }
}
