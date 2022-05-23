import React, { Component } from "react";
import BookShelf from "./BookShelf";

export default class BookShelves extends Component {
  render() {
    return (
      <div className='list-books-content'>
        <div>
          <BookShelf />
          <BookShelf />
        </div>
      </div>
    );
  }
}
