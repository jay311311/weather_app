import React, { Component } from 'react';
import GlobalStyles from "Components/GlobalStyles"
import Router from "Components/Router";



 export default class App extends Component{
  
   render(){

    return(
      <>
      <GlobalStyles/>
      <Router/>
    </>
    )
   }
 }