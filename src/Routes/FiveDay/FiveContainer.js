import React, { Component } from "react";
import FivePresent from "./FivePresent"
import {fiveApi} from "../../api";   

export default class CurrentContainer extends Component{
    state={
        fiveResults:[],
        searchWords:"",
        error:null,
        loading:true,
    }

  

    handleChange=(event)=>{
        const {target:{value}} = event
        this.setState({
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
        this.setState({loading:false})

        try{
            const {data:{list:fiveResults}}  = await fiveApi.five(searchWords)

            this.setState({
                fiveResults
            })
            
        } catch {
            this.setState({error:"i can't find data"})
        } finally {
            this.setState({loading: false})
        }
        
    } 


    render(){
        const {fiveResults, error, loading, searchWords} = this.state;
        
        console.log(this.state)
        return(

        <FivePresent
            searchWords={searchWords} 
            error={error} 
            loading={loading}
            fiveResults={fiveResults} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
        
            />)
    }
}

