import React, { useContext, useRef } from 'react';
import './List.css';
import { RouteComponentProps } from 'react-router';
import { RestoranContext } from '../../context/RestoranContext';
import MenuItem from '../../components/MenuItem/MenuItem'; 
import ShoppingListContext, { ShoppingContext } from '../../context/ShoppingListContext';

const List: React.FC<RouteComponentProps> = (props) => {
  const { menu_list } = useContext(RestoranContext);
  const { addToCart } = useContext(ShoppingContext);
  const listRef = useRef<HTMLDivElement>(null);
  const addToCarts = (item: any) => {
    addToCart(item);
    props.history.push("/cart");
  }

  const scrollToVisibility = function(scrollPosition: number)
    {
      console.log(scrollPosition);
      listRef.current?.scrollTo(0, scrollPosition);
    }
  return (
    <div className="list_holder" ref={listRef}>
        <div className="list_name">{menu_list['name']} <br/> Menu</div>
          { menu_list.meals.map((item:any, key: any) =>
            <MenuItem scrollToVisibility={scrollToVisibility} key={key} renderItem={item} changeLocation={addToCarts}/>
          )}
        
    </div>
  );  
};

export default List;
