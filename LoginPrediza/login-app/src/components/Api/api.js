import axios from 'axios'



export default function apiPost(data){
  
    return(
      axios.post('https://api.prediza.io/api/login',data)
      .then((response) => {
        console.log('RESPOSTA',response.data);
        if(response.status === "sucess"){
        return response.data.token;
        }
        return response.data.status
      })
    );
}



