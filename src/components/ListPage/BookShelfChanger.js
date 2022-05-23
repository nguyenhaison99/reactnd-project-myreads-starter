import React from "react";

export const BookShelfChanger = (props) => {
  const { bookshelf } = props;
  return (
    <div className='book-shelf-changer'>
      <select value={bookshelf.key}>
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};
