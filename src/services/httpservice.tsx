import axios from 'axios';

const main_url = "http://localhost:3000/api/v1/"; 
export const httpGet = (url:string, data:any) => {
	return axios({
		url: main_url + "" + url,
		method: 'get'
	  }).then(response => {
		return response.data.responseData;
	  })
	
	
}