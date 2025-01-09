import React from 'react';
import "./ExploreList.css";
import {menu_list} from '../../toyAssets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Exploreaza lista de jucarii</h1>
        <p className='explore-menu-text'>Alege dintr-o lista variata de jucarii, potrivite fiecarei varste.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
      
    </div>
  );
}

export default ExploreList;
