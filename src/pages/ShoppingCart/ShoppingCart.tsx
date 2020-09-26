import React, { useContext } from 'react';
import './ShoppingCart.css';
import { RouteComponentProps } from 'react-router';
import MenuItem from '../../components/MenuItem/MenuItem';
import { ShoppingContext } from '../../context/ShoppingListContext';
import Summary from '../../components/Summary/Summary';
const ShoppingCart: React.FC<RouteComponentProps> = (props) => { 
    const { cartItems } = useContext(ShoppingContext);
    console.log("WHAT IS CART ITEMS");
    console.log(cartItems);
  return (
    <>
        <div className="list_holder">
            <div className="list_name">Shopping <br/> Cart</div>
                { cartItems.map((item:any, key: any) =>
                    <MenuItem key={key} renderItem={item} isShoppingCart={true} renderIndex={key}/>
                )}
        </div>
        <Summary />
    </>
  );
};

export default ShoppingCart;
