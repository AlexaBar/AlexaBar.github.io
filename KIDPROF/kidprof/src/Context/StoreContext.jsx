import { createContext, useEffect, useState } from "react";
import { toy_list, menu_list } from "../toyAssets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props)=> {

    const [cartItems,setCartItems] = useState({});
    const [ordersData,setOrdersData] = useState({});
    
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) 
            {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
           if(cartItems[item]>0) {
                let itemInfo = toy_list.find((product) => product.toy_id ===  Number(item));
                totalAmount += itemInfo.toy_price * cartItems[item];
            }
        }
        return totalAmount;

    }

    const placeOrder = (deliveryData) =>{

        console.log(deliveryData);
    }
  

    const contextValue = {
        toy_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        placeOrder,
        

    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;