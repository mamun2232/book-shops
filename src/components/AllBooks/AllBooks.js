import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './AllBooks.css'

const AllBooks = () => {
      const [books , SetBook] = useState([])
      // data fect by useEffect 
      useEffect(()=>{
            fetch('books.json')
            .then(res => res.json())
            .then(data => SetBook(data))
      },[])

      // show display cart in ui 
      const [cart , setCart] = useState([books])

      // click Hundelar 
      const cartAdd = (product) => {
            const newCart = [...cart , product]
            setCart(newCart)
            
      }
      console.log(cart);
      


      return (
            <div>
                <div className="container">
                <div className="row">
                       <div className="col-lg-8 col-8 ">
                             <div className="book-container text-center">
                                   {/* <h1>Total {books.length}</h1> */}
                                   {
                                         books.map(book => <Book 
                                          key={book.id}
                                         data={book}
                                         cartAdd={cartAdd}
                                         >

                                         </Book>)
                                   }

                             </div>


                             
                             
                          </div>
                       <div className="col-lg-4 col-4"> 
                       
                       </div>
                 </div>
                </div>
            </div>
      );
};

export default AllBooks;