import React from "react";
import FivePresent from "./FivePresent"
/* import {FiveApi} from "../api";   */

class FiveContainer extends React.Component{
    state={
        FiveResult:null,
        searchTerm:"",
        error:null,
        isLoading:true
    }

    handleSubmit = () =>{
        const {searchTerm}= this.state
        if(searchTerm !== ""){
            this.searchByTerm()
        }
    }

    searchByTerm = () =>{
        const {searchTerm}= this.state
        
    } 


    render(){
        const {FiveResult, error, isLoading,searchTerm} = this.state

        return<FivePresent FiveResult={FiveResult} searchTerm={searchTerm} error={error} isLoading={isLoading}/>
    }
}

export default FiveContainer