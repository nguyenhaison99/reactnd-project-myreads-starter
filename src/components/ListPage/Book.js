import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";

export default class Book extends Component {
  render() {
    const { book, bookshelf, onMove } = this.props;
    return (
      <li>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${book.imageLinks &&
                  book.imageLinks.thumbnail}")`,
              }}
            />
            <BookShelfChanger
              book={book}
              bookshelf={bookshelf}
              onMove={onMove}
            />
          </div>
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>
            {book.authors && book.authors.join(", ")}
          </div>
        </div>
      </li>
    );
  }
}
