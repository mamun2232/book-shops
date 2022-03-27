import React from 'react';
import './Book.css'
import { BsFillCartCheckFill } from 'react-icons/bs'

const Book = ({data , cartAdd}) => {
      const {id , name , img , price, writer , ratings} = data
     
      return (
            <div className='card shadow bg-light'>
                  <div className="image-container">
                        <img src={img} alt="" />
                  </div>
                  <div className="book-info my-2">
                        <h5> {name}</h5>
                        <p>Writer By <span className='text-danger'>{writer}</span></p>
                        <h5> ${price}</h5>
                  </div>
                  <button onClick={() => cartAdd(data)} className='btn btn-primary'>Add To Cart <BsFillCartCheckFill></BsFillCartCheckFill></button>
                  
            </div>
      );
};

export default Book;