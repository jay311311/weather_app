import axios from"axios";


const api  = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/",
    params:{appid:"e71e68187e6da07eb17db48a8cf2dc1b"}
})





/* export const currentApi = async() =>{
  const currentWeather = await api.get(`weather?lat=35&lon=139`) 
  console.log(currentWeather.data)
} 

/*  */ 



 export const currentApi = {
    search :(city) =>  api.get(`weather?q=${city}`)
     } 

  
    
/* api.get(`forecast?id=${cityId}`); */



  export const fiveDayApi ={
    fiveWeather: (cityId) => api.get(`forecast?id=${cityId}`)
 } 

/* export default api */



