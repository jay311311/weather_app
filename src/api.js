import axios from"axios";


const api  = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/",
    params:{appid:"e71e68187e6da07eb17db48a8cf2dc1b"}
})

 export const currentApi = {
         currentWeather: (lat, lon) => api.get(`weather?lat=${lat}&lon=${lon}`,
                         {params:lat, lon})

                         
     }
    
/* api.get(`forecast?id=${cityId}`); */



  export const fiveDayApi ={
    fiveWeather: (cityId) => api.get(`forecast?id=${cityId}`,
    {params:cityId})
 } 

/* export default api */



