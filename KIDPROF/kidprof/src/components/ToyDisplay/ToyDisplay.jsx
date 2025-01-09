import React, { useContext } from 'react';
import './ToyDisplay.css'
import { StoreContext } from '../../Context/StoreContext';
import ToyItem from '../ToyItem/ToyItem';

const ToyDisplay = ({category}) => {

    const {toy_list} = useContext(StoreContext);

  return (
    
    <div className='toy-display' id='toy-display'>
      <h2>Jucării de top</h2>
      <div className='toy-display-list'>
         {toy_list.map((item)=>{
          if (category==="All" || category===item.toy_category) {
            return <ToyItem key={item.toy_id} image={item.toy_image} name={item.toy_name} description={item.toy_description} price={item.toy_price} id={item.toy_id}/>
          }
            
        })}
      </div>
    </div>
   
  );
}

export default ToyDisplay;
