import React, { useContext } from 'react';
import './ToyDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import ToyItem from '../ToyItem/ToyItem';
const ToyDisplay = ({category}) => {

    const {toy_list} = useContext(StoreContext)
  return (
    <div className='toy-display' id='toy-display'>
      <h2>Top dishes near you</h2>
      <div className="toy-display-list">
        {toy_list.map((item,index)=>{
          {console.log(category,item.category);}
          if (category==="All" || category===item.category){
            return <ToyItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
            
        })}
      </div>
    </div>
  );
}

export default ToyDisplay;
