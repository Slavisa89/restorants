import React from 'react';
import './BackProggress.css';
import pizza from '../../assets/images/pizza.png';
import { RouteComponentProps, withRouter } from 'react-router';
const BackProggress: React.FC<RouteComponentProps> = (props) => {
    console.log(props);
    var backWidth = "";
    switch(props.location.pathname)
        {
            case '/dashboard':
                backWidth = "140px";
            break;
            case '/list':
                backWidth = "70%";
            break;
            default:
                backWidth = "100%";
        }

  return (
	  <div className="proggress_indicator" style={{width: backWidth}}>
        
	  </div>
  );
};

export default withRouter(BackProggress);
