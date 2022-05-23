import React from "react";
import Book from "../ListPage/Book";

export default function SearchResults(props) {
  const { books, searchBooks, onMove } = props;
  const updatedBooks = searchBooks.map((book) => {
    books.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className='search-books-results'>
      <ol className='books-grid'>
        {updatedBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            bookshelf={book.shelf ? book.shelf : "none"}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
}
