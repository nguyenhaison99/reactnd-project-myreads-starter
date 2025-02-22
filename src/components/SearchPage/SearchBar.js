import React from "react";
import CloseSearchButton from "./CloseSearchButton";
import SearchBooksInput from "./SearchBooksInput";

export default function SearchBar(props) {
  const { onSearch, onResetSearch } = props;
  return (
    <div className='search-books-bar'>
      <CloseSearchButton onResetSearch={onResetSearch} />
      <SearchBooksInput onSearch={onSearch} />
    </div>
  );
}
