import React, { Component } from 'react';
import GlobalStyles from "Components/GlobalStyles"
import CurrentContainer from '../CurrentWeather/CurrentContainer';
import FiveContainer from '../FiveDayWeather/FiveContainer';



 export default class App extends Component{
  
   render(){

    return(
      <>
      <GlobalStyles/>
      <div className="left">
      <FiveContainer/>
      </div>
      <div className="right">
      <CurrentContainer/>
      </div>
    </>
    )
   }
 }