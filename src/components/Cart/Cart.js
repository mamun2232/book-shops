import React from 'react';
import './Cart.css'

const Cart = (props) => {
      // const {img , name} = cart
      const {img , name } = props.cart
     
      
     
      return (
            <div className='cart'>
                  <div className="cart-image">

                      <img src={img} alt="" />
                  </div>
                  <div className="cart-name">
                        <p>{name}</p>
                  </div>
                  <div className="div">
                        
                  </div>
                  
            </div>
      );
};

export default Cart;