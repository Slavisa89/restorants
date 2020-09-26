import React, { useState, useContext } from 'react';
import './Summary.css';
import { IonButton, IonAlert } from '@ionic/react';
import { ShoppingContext } from '../../context/ShoppingListContext';
const Summary: React.FC = (props) => {
  const [isExpanded, setExpanded ] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { cartData, resetCart } = useContext(ShoppingContext);
  return ( 
	  <div className="shopping_summary"> 
      <div className={"summary_title" + (isExpanded ? ' active' : '')} onClick={() => setExpanded(!isExpanded)}>Shoping Cart Summary</div>
      { isExpanded && 
        <div className="summary_main">
          <div className="summary_hold">
            <div className="summary_items">
              <div className="summary_item_name">Number of items:</div>
              <div className="summary_item_value">{cartData['cartQuantaty']}</div>
            </div>
            <div className="summary_items">
              <div className="summary_item_name">Subtotal:</div>
              <div className="summary_item_value">{cartData['totalValueCart']}KM</div>
            </div>
            <div className="summary_items">
              <div className="summary_item_name">Tax:</div>
              <div className="summary_item_value">{((cartData['taxPercentage'] / 100)*cartData['totalValueCart']).toFixed(2)}KM</div>
            </div>
            <div className="summary_items">
              <div className="summary_item_name">Total:</div>
              <div className="summary_item_value red_value">{ ((cartData['taxPercentage'] / 100)*cartData['totalValueCart'] + cartData['totalValueCart']).toFixed(2)}KM</div>
            </div>
          </div>

          <div className="summary_buttons">
            <div className="summary_delete" onClick={() => setShowAlert(true)}></div>
            <IonButton color="danger">Order</IonButton>
          </div>
        </div>
      }
      <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          mode="ios"
          message={'Do you want to remove all your orders?'}
          buttons={[
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel: blah');
              }
            },
            {
              cssClass: 'primary',
              text: 'Okay',
              handler: () => {
                resetCart();
              }
            }
          ]}
        />
    </div>
  );
};

export default Summary;
