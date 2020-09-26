import React, { createContext, useReducer } from "react";

const initialState = { cartItems: [], cartQuantaty: 0, totalValueCart: 0, taxPercentage: 18 };
function reducer(initialState, action) {
    if( action.data )
      {
        var old_data = [...initialState.cartItems];
        var new_index = old_data.findIndex((item) => item['id'] === action.data.id);
      }
    
    switch (action.type) {
      case 'addToCart': 
        if( new_index > -1 )
            {
                old_data[new_index]['quantaty']++;
                return  {
                  ...initialState,
                  cartQuantaty: initialState.cartQuantaty +1,
                  totalValueCart: initialState.totalValueCart + parseFloat(old_data[new_index]['price']),
                  cartItems: old_data
                }
            }
        action.data['quantaty'] = 1;
        return  {
          ...initialState, 
          cartQuantaty: initialState.cartQuantaty +1,
          totalValueCart: initialState.totalValueCart + parseFloat(action.data['price']),
          cartItems: [...initialState.cartItems, action.data]
        }
      case 'increment':
        return {
          ...initialState,
          cartQuantaty: initialState.cartQuantaty +1,
          totalValueCart: initialState.totalValueCart + parseFloat(old_data[new_index]['price']),
          cartItems: 
          [...initialState.cartItems].map((item, index) =>{
              if( item['id'] === action.data.id )
                {
                  return {
                    ...item,
                    quantaty: item.quantaty+ 1
                  } 
                }
              else { return item; }
          })
        }        
      case 'decrement':
        old_data[new_index]['quantaty']--;
        const item_price = parseFloat(old_data[new_index]['price']);
        if( old_data[new_index]['quantaty'] < 1 ) { old_data.splice(new_index, 1); }
        return {
          ...initialState,
          cartQuantaty: initialState.cartQuantaty-1,
          totalValueCart: initialState.totalValueCart - item_price,
          cartItems: old_data
        };
      default:
        return { cartItems: [], cartQuantaty: 0, totalValueCart: 0, taxPercentage: 18 };
    }
  }

export const ShoppingContext = createContext();
const ShoppingListContext = props => {
const [cartItems, dispatch] = useReducer(reducer, initialState);

const addToCart = item => {
    dispatch({type: 'addToCart', data: item});
}

const resetCart = () => {
  dispatch({type: 'removeFromCart'});
}

const updateQuantaty = (item_id, addOrSubs) => {
    dispatch({type: addOrSubs, data: { id: item_id }});
}

const cartItemsSend = cartItems.cartItems;
return (
    <ShoppingContext.Provider value={{ resetCart, cartData: cartItems, cartItems: cartItemsSend, addToCart, updateQuantaty }}>
        {props.children}
    </ShoppingContext.Provider>
    );
};

export default ShoppingListContext; 
