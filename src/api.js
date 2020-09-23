import axios from"axios";


const api  = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/",
    params:{appid:"e71e68187e6da07eb17db48a8cf2dc1b" }
})


 export const currentApi = {
    search :(city) =>  api.get(`weather?q=${city}`)
     } 


  export const fiveApi = {
    five: (cityName) => api.get(`forecast?q=${cityName}`)
 } 



