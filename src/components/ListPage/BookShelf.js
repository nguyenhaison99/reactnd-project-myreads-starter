import React, { Component } from "react";
import Book from "./Book";

export default class BookShelf extends Component {
  render() {
    const { books, bookshelf, onMove } = this.props;
    const booksOnThisShelf = books.filter(
      (book) => book.shelf === bookshelf.key
    );
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{bookshelf.name}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {booksOnThisShelf.map((book) => (
              <Book
                key={book.id}
                book={book}
                bookshelf={bookshelf}
                onMove={onMove}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
