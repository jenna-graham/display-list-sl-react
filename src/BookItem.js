import React from 'react';

export default function BookItem({ title, author, genre, data }) 
{
  return ( 
    <div className="book-item">
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{genre}</p>
      <p>{data.date}</p>
      <p>{data.pageNumber}</p>
    </div>
  );
  
}

