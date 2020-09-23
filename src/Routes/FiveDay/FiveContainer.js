import React, { Component } from "react";
import FivePresent from "./FivePresent"
import {fiveApi} from "../../api";   

export default class CurrentContainer extends Component{
    state={
        fiveResults:null,
        searchTerm:"london",
        error:null,
        loading:true
    }

    componentDidMount(){
        this.handleSubmit();
    }

    handleSubmit = () =>{
        const {searchTerm}= this.state;
        if(searchTerm !== ""){
            this.searchByTerm()
        }
    }

    searchByTerm = async() =>{
        const {searchTerm}= this.state;
        this.setState({loading:false})

        try{
            const  fiveResults = await fiveApi.five(searchTerm)
            
            console.log(fiveResults)
        } catch{
            this.setState({
                error:"i can't find data"
            })
        }finally{
            this.setState({
                loading: false
            })
        }
        
    } 


    render(){
        const {fiveResults, error, loading, searchTerm} = this.state;

        return(
        <FivePresent
            fiveResults={fiveResults} 
            searchTerm={searchTerm} 
            error={error} 
            loading={loading}
            />)
    }
}

