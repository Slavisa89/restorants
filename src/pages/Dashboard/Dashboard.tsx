import React, { useContext, useState } from 'react';
import './Dashboard.css';
import { RouteComponentProps } from 'react-router';
import { RestoranContext } from '../../context/RestoranContext';
import { IonButton, IonRow, IonCol, IonHeader, IonContent } from '@ionic/react';
import piletina from '../../assets/images/piletina.jpg';
import crispi from '../../assets/images/crispi.jpg';
import cart  from '../../assets/images/shopping.png';
import neskafa from '../../assets/images/neskafa.jpg';
import cocacola from '../../assets/images/cocacola.jpg';
import fanta from '../../assets/images/fanta.jpg';
const Dashboard: React.FC<RouteComponentProps> = (props) => {
    const { restoran } = useContext(RestoranContext);
    const [opened_menu, setOpenedMenu] = useState(0);

    const fakeRestoran = 
        {
            "restoran_name": "Restoran 304",
            "restoran_image": restoran,
            "restoran_menu":
                [
                    {
                        "name": "Glavni meni",
                        "meals": [
                            {
                                title: "Piletina sa 4 vrste sira",
                                description: "Piletina koja u sebi ima 4 vrste sira. Lagana i veoma osvezavajuca za ove suncane dane.",
                                order_wait: "20 - 30min",
                                price: "9km",
                                picture: piletina
                            },
                            {
                                title: "Crispi Piletina",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                order_wait: "10 - 20min",
                                price: "12km",
                                picture: crispi
                            }
                        ]
                    },
                    {
                        "name": "Topli Napitci",
                        "meals": [
                            {
                                title: "Kafa",
                                description: "Kafa sa mlijekom",
                                order_wait: "20 - 30min",
                                price: "9km",
                                picture: piletina
                            },
                            {
                                title: "Nes Kafa",
                                description: "Nes Kafa sa slagom.",
                                order_wait: "2min",
                                price: "1.5km",
                                picture: neskafa
                            }
                        ]
                    },
                    {
                        "name": "Sokovi",
                        "meals": [
                            {
                                title: "Coca Cola",
                                description: "Gazirano pice",
                                order_wait: "odmah",
                                price: "2km",
                                picture: cocacola
                            },
                            {
                                title: "Fanta",
                                description: "Gazirano pice",
                                order_wait: "odmah",
                                price: "2km",
                                picture: fanta
                            }
                        ]
                    }
                ]
        };

  return (
    <>
        <IonHeader>
            <IonRow className="white_row">
                    <IonCol className="no_padding">
                         <div className="background_opacity"></div>
                         <div className="main_restoran_picture" style={{backgroundImage: `url(${fakeRestoran['restoran_image']})`}}></div>
                         <div className="restorant_name">{fakeRestoran['restoran_name']}</div>
                    </IonCol>
                </IonRow>
        </IonHeader>
        <IonContent>
            <div className="dashboard_content">
                <div className="left_content">
                    <div className="restoran_menu">
                        { fakeRestoran.restoran_menu.map((item,index) => 
                            <div onClick={() => setOpenedMenu(index)} key={index} className={"menu_item " + (index === opened_menu ? 'active' : '')}>{item['name']}</div>
                        )}
                    </div>     
                </div>
                <div className="right_content">
                    { fakeRestoran.restoran_menu[opened_menu]['meals'].map((item, index) => 
                        <div className="menu_items" key={index}>
                            <div className="item_description">
                                <div className="item_image" style={{backgroundImage: `url(${item['picture']})`}}></div>
                                <div className="item_info">
                                    <div className="item_name">{item['title']}</div>
                                    <div className="item_name_long">{item['description']}</div>
                                    <div className="item_duration">Priprema <span className="ready_time">{item['order_wait']}</span></div>
                                    <div className="item_price_and_order">
                                        <span>{item['price']}</span>
                                        <div className="order_item" style={{backgroundImage: `url(${cart})`}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </IonContent>
    </>
  );
};

export default Dashboard;
