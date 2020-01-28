import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div>
    <h1>Reading List</h1>
    {books.length > 0 
      ?
      <p>Currently you have { books.length } {books.length > 1 ? 'books' : 'book'} to get through...</p> 
      :
      <p>There are zero books in your list</p>
    }    
    </div>
  )
}

export default Navbar
