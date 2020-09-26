import React, { useState } from 'react';
import './ExploreContainer.css';
import { Plugins, CameraResultType } from '@capacitor/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
interface ContainerProps {start: string}

const ExploreContainer: React.FC<ContainerProps> = (props) => {	
	console.log(Plugins);
	const { Camera } = Plugins;
	const [photo, setPhoto] = useState("");
	const takePhoto = async () => {
		const imgs:any = await Camera.getPhoto({
			quality: 90,
			allowEditing: false,
			resultType: CameraResultType.Uri
		});
		setPhoto(imgs.webPath);
	};
	
	const openScanner = async () => {
		const data = await BarcodeScanner.scan();
		console.log(`Barcode data: ${data.text}`);
	 };
  return (
    <div className="container">
	  <img src={photo} />
      <strong onClick={ openScanner }>Ready to create an app? {props.start}</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
