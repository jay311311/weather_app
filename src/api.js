import axios from"axios";
 const cityId = 2172797; 

const api  = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/",
    params:{appid:"e71e68187e6da07eb17db48a8cf2dc1b"}
})

 export const currentApi = {
         currentWeather: (cityId) => api.get(`weather?id=${cityId}`)
     }
    
/* api.get(`forecast?id=${cityId}`); */
// export currentApi ={
//     currentWeather: (id) => api.get("weather/${id}")
// }



 export const fiveDayApi ={
    fiveWeather: (cityId) => api.get(`forecast?id=${cityId}`)
 }
/* export default api */



