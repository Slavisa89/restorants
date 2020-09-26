import React, { ComponentClass, Component, useState, useContext,useRef, Ref } from 'react';
import './MenuItem.css';
import { ShoppingContext } from '../../context/ShoppingListContext';

interface IControlAreaProps {
   renderItem?: any,
   changeLocation?: any,
   isShoppingCart?: boolean,
   renderIndex?: number,
   scrollToVisibility?: Function
 }
const MenuItem: React.FC<IControlAreaProps> = (props) => {
   const { updateQuantaty } = useContext(ShoppingContext);
   var myRef = useRef<HTMLDivElement>(null);
   const { renderItem, isShoppingCart,renderIndex, scrollToVisibility } = props;
   const [openedItem, setOpenedItem] = useState(false);
   const handleClick = () => {
      if( !openedItem )
         {
            setOpenedItem(true);
            if( myRef !== null && myRef.current !== null) {
                  setTimeout(() => {
                     const cheight = myRef.current?.clientHeight ? myRef.current?.clientHeight : 0;
                     const offsetTop = myRef.current?.offsetTop ? myRef.current?.offsetTop : 0;
                     if(scrollToVisibility) scrollToVisibility(offsetTop - (cheight /2));
                  }, 20);
                  
            }
         }
      else { props.changeLocation(renderItem) }
   }

  return (
	  <div className="menu_item_main" ref={myRef}>
        { openedItem &&
          <div className="unexpand_item" onClick={() => setOpenedItem(false)}></div>
        }
        <div className="new_left_holder">
            <div className="menu_item_picture" style={{backgroundImage: `url(${renderItem['picture']})`}}></div>
            
            { openedItem &&
               <div className="menu_long_icons">
                  <div className="menu_like"></div>
                  <div className="menu_comment"></div>
                  <div className="menu_share"></div>
               </div>
            }
        </div>
        
        <div className="menu_item_description">
           <div className={"menu_item_title"}>{renderItem['title']}</div>
            <div className={"menu_item_log_text" + (openedItem ? ' active' : '')}>
                  <div className="menu_long_text">
                        {renderItem['description']}
                  </div>
            </div>
           
           <div className="menu_item_stars">
              <div className="active"></div>
              <div className="active"></div>
              <div className="active"></div>
              <div></div>
              <div></div>
           </div>
           <div className="menu_item_dess">
              <div className="menu_item_weight">250 g</div>
              <div className="menu_item_price">{renderItem['price']}</div>
           </div>
        </div>
        { !isShoppingCart ? 
         <div className={"add_item " + (openedItem ? 'active' : '') } onClick={() => handleClick()}></div>:
         <div className="change_quantaty">
            <div className="decrease_quantaty"  onClick={ () => updateQuantaty(renderItem['id'], "decrement") }></div>
            <div className="main_quantaty">{renderItem['quantaty']}</div>
            <div className="increase_quantaty" onClick={ () => updateQuantaty(renderItem['id'], "increment") }></div>
         </div>
        }
        
	  </div>
  );
};

export default MenuItem;
