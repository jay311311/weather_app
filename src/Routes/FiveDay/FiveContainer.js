import React from "react";
import FivePresent from "./FivePresent"
/*  import {FiveApi} from "../api";  */

class FiveContainer extends React.Component{
    state={
        FiveWeather:null,
        error:null,
        isLoading:true
    }

    render(){
        const {FiveWeather, error, isLoading} = this.state

        return<FivePresent FiveWeather={FiveWeather} error={error} isLoading={isLoading}/>
    }
}

export default FiveContainer