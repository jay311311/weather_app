import React, { Component } from "react";
import CurrentPresent from "./CurrentPresent"
/*  import {currentApi} from "../api";  */

class CurrentContainer extends Component{
    state={
        currentWeather:null,
        error:null,
        isLoading:true
    }

    render(){
        const {currentWeather, error, isLoading} = this.state

        return<CurrentPresent currentWeather={currentWeather} error={error} isLoading={isLoading}/>
    }
}

export default CurrentContainer