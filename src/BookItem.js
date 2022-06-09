import React from 'react';
export default function BookItem({ title, author, genre, data }) 
{
  return ( 
    <div className="book-item">
      <h2>{title}</h2>
      <h3>Author: {author}</h3>
      <h3>Genre: {genre}</h3>
      <h3>Data:</h3>
      <p>Date Released: {data.date}</p>
      <p>Page Number: {data.pageNumber}</p>
    </div>
  );
  
}

