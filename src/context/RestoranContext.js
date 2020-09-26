import React, { createContext, useState } from "react";
import { httpGet } from "../services/httpservice";
import piletina from '../assets/images/piletina.jpg';
import crispi from '../assets/images/crispi.jpg';
import restoran from '../assets/images/restoran.jpg';
import neskafa from '../assets/images/neskafa.jpg';
import pizza from '../assets/images/pizza.png';
import salad from '../assets/images/salad.png';
import deserts from '../assets/images/deserts.png';
import pasta from '../assets/images/pasta.png';

export const RestoranContext = createContext();
const fakeRestoran = 
        {
            "restoran_name": "Restoran 304",
            "main_tax_percentage": "18%",
            "restoran_image": restoran,
            "restoran_menu":
                [
                    {
                        "name": "Pizza",
                        picture: pizza,
                        "meals": [
                            {
                                id: 1,
                                title: "Piletina sa 4 vrste sira",
                                description: "Piletina koja u sebi ima 4 vrste sira. Lagana i veoma osvezavajuca za ove suncane dane.",
                                order_wait: "20 - 30min",
                                price: "9km",
                                picture: piletina
                            },
                            {
                                id: 2,
                                title: "Crispi Piletina",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                order_wait: "10 - 20min",
                                price: "12km",
                                picture: crispi
                            },
                            {
                                id: 9,
                                title: "Piletina sa 4 vrste sira",
                                description: "Piletina koja u sebi ima 4 vrste sira. Lagana i veoma osvezavajuca za ove suncane dane.",
                                order_wait: "20 - 30min",
                                price: "9km",
                                picture: piletina
                            },
                            {
                                id: 10,
                                title: "Crispi Piletina",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                order_wait: "10 - 20min",
                                price: "12km",
                                picture: crispi
                            },
                            {
                                id: 11,
                                title: "Piletina sa 4 vrste sira",
                                description: "Piletina koja u sebi ima 4 vrste sira. Lagana i veoma osvezavajuca za ove suncane dane.",
                                order_wait: "20 - 30min",
                                price: "9km",
                                picture: piletina
                            },
                            {
                                id: 12,
                                title: "Crispi Piletina",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                order_wait: "10 - 20min",
                                price: "12km",
                                picture: crispi
                            }
                        ]
                    },
                    {
                        "name": "Salads",
                        picture: salad,
                        "meals": [
                            {
                                id: 3,
                                title: "Kafa",
                                description: "Kafa sa mlijekom",
                                order_wait: "20 - 30min",
                                price: "9km",
                                picture: piletina
                            },
                            {
                                id: 4,
                                title: "Nes Kafa",
                                description: "Nes Kafa sa slagom.",
                                order_wait: "2min",
                                price: "1.5km",
                                picture: neskafa
                            }
                        ]
                    },
                    {
                        "name": "Deserts",
                        picture: deserts,
                        "meals": [
                            {
                                id: 5,
                                title: "Kafa",
                                description: "Kafa sa mlijekom",
                                order_wait: "20 - 30min",
                                price: "9km",
                                picture: piletina
                            },
                            {
                                id: 6,
                                title: "Nes Kafa",
                                description: "Nes Kafa sa slagom.",
                                order_wait: "2min",
                                price: "1.5km",
                                picture: neskafa
                            }
                        ]
                    },
                    {
                        "name": "Pasta",
                        picture: pasta,
                        "meals": [
                            {
                                id: 7,
                                title: "Kafa",
                                description: "Kafa sa mlijekom",
                                order_wait: "20 - 30min",
                                price: "9km",
                                picture: piletina
                            },
                            {
                                id: 8,
                                title: "Nes Kafa",
                                description: "Nes Kafa sa slagom.",
                                order_wait: "2min",
                                price: "1.5km",
                                picture: neskafa
                            }
                        ]
                    }
                ]
        };

const RestoranContextProvider = props => {
  const [restoran, setRestoranInfo] = useState(fakeRestoran);
  const [menu_list, setMenuList] = useState({
    "name": "Pizza",
    picture: pizza,
    "meals": [
        {
            id: 1,
            title: "Piletina sa 4 vrste sira",
            description: "Piletina koja u sebi ima 4 vrste sira. Lagana i veoma osvezavajuca za ove suncane dane.",
            order_wait: "20 - 30min",
            price: "9km",
            picture: piletina
        },
        {
            id: 2,
            title: "Crispi Piletina",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            order_wait: "10 - 20min",
            price: "12km",
            picture: crispi
        }
    ]
});
  const [loading, setLoading] = useState(true);
  
  const runSearch = restoranId => {
   httpGet(`restorans/${restoranId}/findrestoran`, {}).then((res) => {
        setRestoranInfo(res);
   });
  };
  const changeMenuList = choosen_menu => {
    setMenuList(choosen_menu);
  }

  return (
    <RestoranContext.Provider value={{ restoran, loading,menu_list, runSearch, changeMenuList }}>
      {props.children}
    </RestoranContext.Provider>
  );
};

export default RestoranContextProvider; 
