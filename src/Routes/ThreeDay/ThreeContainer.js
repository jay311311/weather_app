import React, { Component } from "react";
import ThreePresent from "./ThreePresent"
import {threeApi} from "../../api";   

export default class CurrentContainer extends Component{
    state={
        threeResults:[],
        searchWords:"",
        error:null,
        loading:true,
    }

  

    handleChange=(event)=>{
        const {target:{value}} = event
        this.setState({
            threeResults:[],
            searchWords:value
        })
    }

    handleSubmit = (event) =>{
         event.preventDefault();
        const {searchWords}= this.state;
        if(searchWords !== ""){
            this.searchByTerm();
        }
    }


    searchByTerm = async() => {
        const {searchWords}= this.state;
        this.setState({
            error:null,
            loading:false,
          })

        try{
            const {data:{list:threeResults}}  = await threeApi.three(searchWords)
            this.setState({
                threeResults
            })
        } catch {
            this.setState({
                error:"i can't find data"})
        } finally {
            this.setState({loading: false})
        }
        
    } 


    render(){
        const {threeResults, error, loading, searchWords} = this.state;
        return(
        <ThreePresent
            searchWords={searchWords} 
            error={error} 
            loading={loading}
            threeResults={threeResults} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />)
    }
}

