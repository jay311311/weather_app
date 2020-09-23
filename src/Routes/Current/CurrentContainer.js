import React, { Component } from "react";
import CurrentPresent from "./CurrentPresent"
import { currentApi } from "../../api"; 



export default class CurrentContainer extends Component{
    state={
        weatherResults:null,
        searchTerm:"",
        error:null,
        loading:true
    }



    handleSubmit=(event)=>{
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm !==""){
            this.searchByTerm();
        }
    }


    updateTerm=(event)=>{
        const {target:{value}} = event;
        this.setState({
            searchTerm: value
        })
        
    }

    searchByTerm = async () =>{
        const {searchTerm} = this.state;
        this.setState({
            loading:true
        })
        try{
            const {data:weatherResults} = await  currentApi.search(searchTerm);
         
            this.setState({
                searchTerm:"",
               weatherResults
            })
           
        } catch{
            this.setState({
                error:"ican't find imformation"
            })
        } finally{
            this.setState({
                loading:false
                
            })
        }

    }
  

    render(){
        const { error, loading,weatherResults,searchTerm} = this.state
        return(
            <CurrentPresent  
                searchTerm={searchTerm}
                weatherResults={weatherResults}
                error={error} 
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}

            />
        )
    }
}

