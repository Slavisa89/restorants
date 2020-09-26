import React, { useContext, useState } from 'react';
import './Menu.css';
import { RouteComponentProps } from 'react-router';
import { RestoranContext } from '../../context/RestoranContext';
import { IonButton, IonRow, IonCol, IonHeader, IonContent } from '@ionic/react';
const Menu: React.FC<RouteComponentProps> = (props) => { 
    const { restoran, changeMenuList } = useContext(RestoranContext);
    const [opened_menu, setOpenedMenu] = useState(0);

    const changeMenu = (ind: number) => {
        changeMenuList(ind);
        props.history.push("/list");
    }

  return (
    <>
        <IonHeader>
            <IonRow className="white_row">
                    <IonCol className="no_padding">
                         <div className="background_opacity"></div>
                         <div className="main_restoran_picture" style={{backgroundImage: `url(${restoran['restoran_image']})`}}></div>
                         <div className="restorant_name">{restoran['restoran_name']}</div>
                    </IonCol>
                </IonRow>
        </IonHeader> 
        <IonContent>
            <div className="dashboard_content">
                <div className="left_content"></div>
                <div className="right_content">
                    { restoran.restoran_menu.map((item:any,index:any) => 
                        <div className="main_menu_item" key={index} onClick={() => changeMenu(item)}>
                            <div className="menu_picture" style={{backgroundImage: `url(${item['picture']})`}}></div>
                            <div className="menu_item_description">
                                <div className="item_title">{item['name']}</div>
                                <div className="item_quantaty">{ item['meals'].length } items.</div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </IonContent>
    </>
  );
};

export default Menu;
