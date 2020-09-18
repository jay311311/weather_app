import React, { Component } from "react";
import CurrentPresent from "./CurrentPresent"
/* import { currentApi } from "../api"; */
/*  import {currentApi} from "../api";  */

class CurrentContainer extends Component{
    state={
        currentApi : [],        
        error:null,
        isLoading:true,

    }

    render(){
        const {currentApi, error, isLoading} = this.state

        return<CurrentPresent currentApi={currentApi} error={error} isLoading={isLoading}/>
    }
}

export default CurrentContainer