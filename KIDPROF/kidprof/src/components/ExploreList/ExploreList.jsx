import React, { useContext } from 'react'
import "./ExploreList.css";
import { StoreContext } from '../../Context/StoreContext'

const ExploreList = ({category,setCategory}) => {

    const {menu_list} = useContext(StoreContext);
    
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explorează lista de jucării</h1>
        <p className='explore-menu-text'>Alege dintr-o listă variată de jucării, potrivite fiecărei vârste.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.list_name?"All":item.list_name)} key={index}className='explore-menu-list-item'>
                        <img className={category===item.list_name?"active":""} src={item.list_image} alt=""/>
                        <p>{item.list_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  );
}

export default ExploreList
