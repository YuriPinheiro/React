import axios from 'axios'



export default function apiPost(data){
  
    return(
      
      axios.post('https://api.prediza.io/api/login',data)
      .then((response) => {
        console.log('👉 Returned data:', response);
        return response.data.token;
      },
      (error) => { 
        console.log('👉 Returned error',error) 
      })
    );
}



