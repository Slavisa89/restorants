import { IonButton } from '@ionic/react';
import React, { useState, useEffect, useContext } from 'react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import './Home.css';
import { RouteComponentProps } from 'react-router';
import { RestoranContext } from '../../context/RestoranContext';

const Home: React.FC<RouteComponentProps> = (props) => {
  const [scanInfo, startScan] = useState();
  const { restoran, runSearch } = useContext(RestoranContext);
  const openScanner = async () => { 
	  	//runSearch("5f09d4851a88ce0d8848d926");
		
		try {
			const data:any = await BarcodeScanner.scan(); 
			props.history.push("/dashboard")
			//startScan(data.text);
		}catch(e){
			props.history.push("/dashboard")
		}
		
	 };
	 
 useEffect(() => {
	//if( Object.keys(restoran).length > 0 && !restoran.nopostsfound ) props.history.push("/dashboard");
 }, [restoran]);	 
	 
  return (
	  <div className="container">
		<div className="home_container">
			<IonButton color="primary" onClick={openScanner}>Search Restorans</IonButton>
			<div className="barcode_res">{scanInfo}</div>
		</div>
	  </div>
  );
};

export default Home;
