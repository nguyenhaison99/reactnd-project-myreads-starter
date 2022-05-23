import React from "react";
import Book from "../ListPage/Book";

export default function SearchResults(props) {
  const { books } = props;
  return (
    <div className='search-books-results'>
      <ol className='books-grid'>
        {books.map((book) => (
          <Book key={book.id} book={book} bookshelf='none' />
        ))}
      </ol>
    </div>
  );
}
