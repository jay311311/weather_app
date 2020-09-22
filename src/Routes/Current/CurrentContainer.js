import React, { Component } from "react";
import CurrentPresent from "./CurrentPresent"
import { currentApi } from "../../api"; 


export default class CurrentContainer extends Component{
    state={
        weatherResults:null,
        searchTerm:"london",
        error:null,
        loading:true,
        iconImage:null
       
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
        console.log(value)
    }

    searchByTerm = async () =>{
        const {searchTerm,iconImage} = this.state;
        this.setState({
            loading:true
        })
        try{

            const {data:weatherResults} = await  currentApi.search(searchTerm);
            const iconImage = weatherResults.weather[weatherResults.weather.length-1];

            this.setState({
                iconImage,
               weatherResults
            })
            console.log(weatherResults);
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
        const { error, iconImage,loading,weatherResults,searchTerm} = this.state
        
        return(
            <CurrentPresent  
                searchTerm={searchTerm}
                weatherResults={weatherResults}
                error={error} 
                loading={loading}
                iconImage={iconImage}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}

            />
        )
    }
}

