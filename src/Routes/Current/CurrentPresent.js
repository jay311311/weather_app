import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"
import Message from "../../Components/Message"
import MainScreen from "./MainScreen"

/* import Section from "../../Components/Section" */

    const Container = styled.div`
    width:100%; 
text-align:center;
    `;
    const Form = styled.form`
    margin-bottom:50px;
    text-align:center;
    `;

    const Input = styled.input`
    all:unset;
    font-size:20px;
    `;

 

        const CurrentPresent = ({weatherResults, searchTerm, handleSubmit,updateTerm,error})=> 
       
        (
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Input 
                    placeholder="enter your city" 
                    value={searchTerm} 
                    onChange={updateTerm}
                    />
                </Form>
                
                {weatherResults? (
                     <MainScreen
                     error={error}
                     key = {weatherResults.weather.id}
                     id = {weatherResults.weather.id}
                     name = {weatherResults.name}
                     iconImg={weatherResults.weather[weatherResults.weather.length - 1]}
                     temps={weatherResults.main}
                 />   
                ) : <Message color="#e74c3c" text={""}/>}
                
               

                {error && <Message color="darkgray" text={" Check Your Letter (in English)"}/>}
               
              
            </Container>
            
       )
        
  

            CurrentPresent.propTypes={
                error : PropTypes.string,
                loading : PropTypes.bool.isRequired,
                weatherResults : PropTypes.object,
                searchTerm : PropTypes.string,
                handleSubmit : PropTypes.func.isRequired,
                updateTerm: PropTypes.func.isRequired,
            }

            
export default CurrentPresent
