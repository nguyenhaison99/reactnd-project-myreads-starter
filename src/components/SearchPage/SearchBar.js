import React from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  return (
    <div className='search-books-bar'>
      <CloseSearchButton />
      <SearchBooksInput />
    </div>
  );
}

const CloseSearchButton = () => {
  return (
    <Link to='/'>
      <button className='close-search'>Close</button>
    </Link>
  );
};

const SearchBooksInput = () => {
  return (
    <div className='search-books-input-wrapper'>
      <input type='text' placeholder='Search by title or author' />
    </div>
  );
};
