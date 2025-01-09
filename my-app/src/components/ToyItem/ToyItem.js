import React, { useContext } from 'react';
import './ToyItem.css'
import { assets } from '../../toyAssets';
import { StoreContext } from '../../context/StoreContext';

const ToyItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
 
  return (
    <div className='toy-item'>
      <div className="toy-item-img-container">
        <img className='toy-item-image' src={image} alt="" />
        {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
        : <div className='toy-item-counter'>
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>

        }
      </div>
      <div className="toy-item-info">
        <div className="toy-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="toy-item-desc">{description}</p>
        <p className="toy-item-price">{price} Lei</p>
      </div>
    </div>
  );
}

export default ToyItem;
