import React from 'react';
import { books } from './book-data';
import BookItem from './BookItem';

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {
        books.map((book, i) =>
          <BookItem {...book} 
            key={book.title + i}/>)
      }
    </div>
  );
}

