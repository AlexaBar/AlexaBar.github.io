import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, toy_list, removeFromCart, getTotalCartAmount}= useContext(StoreContext);

  const navigate = useNavigate();


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {toy_list.map((item,index)=>{
          if(cartItems[item.toy_id]>0)
            {
              return (
                <div key={index}>
  <div className='cart-items-title cart-items-item'>
                  <img src={item.toy_image} alt="" />
                  <p>{item.toy_name}</p>
                  <p>{item.toy_price} Lei</p>
                  <p>{cartItems[item.toy_id]}</p>
                  <p>{item.toy_price*cartItems[item.toy_id]} Lei</p>
                  <p onClick={()=>removeFromCart(item.toy_id)} className='cross'>x</p>

                </div>
                <hr />
                </div>
              
              )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} Lei</p>
            </div>
            <div className="cart-total-details">
              <p>Costuri livrare</p>
              <p>{getTotalCartAmount()===0?0:20} Lei</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{ getTotalCartAmount()===0?0:getTotalCartAmount()+20} Lei</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>FINALIZEAZA COMANDA</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Dacă aveți un cod promoțional, introduceți-l aici</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
