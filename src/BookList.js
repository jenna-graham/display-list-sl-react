import React from 'react';
import BookItem from './BookItem';
import './App.css';


export default function BookList({ books }) {
  return (
    <div className="book">
      <h1>Favorite Books</h1>
      {
        books.map((book, i) =>
          <BookItem {...book} 
            key={book.title + i}/>)
      }
    </div>
  );
}

