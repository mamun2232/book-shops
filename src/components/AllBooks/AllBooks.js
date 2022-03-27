import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './AllBooks.css'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { AiOutlineClear } from 'react-icons/ai'

const AllBooks = () => {
      const [books , SetBook] = useState([])
      // data fect by useEffect 
      useEffect(()=>{
            fetch('books.json')
            .then(res => res.json())
            .then(data => SetBook(data))
      },[])

      // show display cart in ui 
      const [carts , setCart] = useState([])
      console.log(carts);

      // click Hundelar 
      const cartAdd = (product) => {
            
            if(carts.length === 4){
                  alert('sorry cannot select more then 4 items')
                  return

            }
            else{
                  const newCart = [...carts , product]
            setCart(newCart)
            }
            
      }
      const [book , setBook] = useState([])
     
//      random prodect hendeler 
 const randomBook = () =>{
      const randomProduct = carts[Math.floor(Math.random() * carts.length)]
      if(carts.length > 1){
       setBook(randomProduct)
       }
       else{
             alert('Noting to chouse from only item')
      }
 }

 const clearCart = () =>{
       setCart([])
       setBook([])
 }

      return (
            <div>
                <div className="container">
                <div className="row">
                       <div className="col-lg-8 col-12 ">
                             <div className="book-container text-center mt-4">

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
                       <div className="col-lg-4 col-12"> 
                         <div className="cart-container mt-4 card shadow bg-light">
                               <h4 className='text-center'>Your Selected Book</h4>
                               
                            {
                                  carts.map(cart =><Cart 
                                   
                                  cart={cart}
                                 
                                  >

                                  </Cart> )
                                      
                                  
                                  
                            }
                            {/* random cart show by ui  */}

                            <div>
                            <h4 className='my-4'>Select random Book</h4>
                       <div className='random-cart'>
                       <div className="cart-img">

                        <img src={book.img} alt="" />
                        </div>
                        <div className="cart-name">
                        <p>{book.name}</p>
                        </div>
                       </div>
                  <div className="div">
                        
                  </div>
                            </div>
                    
                            
                              <button onClick={() => randomBook()}  className='w-50 m-auto btn btn-primary mt-2'>Rendom select <BsFillCartCheckFill></BsFillCartCheckFill></button>
                        <button onClick={()=> clearCart()} className='w-50 m-auto btn btn-primary mt-2'>Clear Cart <AiOutlineClear></AiOutlineClear></button>

                         </div>
                        
                       
                       
                       </div>
                 </div>
                </div>
            </div>
      );
};

export default AllBooks;