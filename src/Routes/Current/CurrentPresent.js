import React from 'react'
import PropTypes from "prop-types"
import styled from "styled-components"
/* import Section from "../../Components/Section" */

    const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center
    `;
    const Form = styled.form`
    margin-bottom:50px
    `;

    const Input = styled.input`
    all:unset;
    font-size:20px;
    `;

    const Title= styled.span`
    color:white
    `
    const Icon= styled.div`
    background-image: url(${props=>props.bgUrl});
    width:100px;
    height:100px;
   
    `
    const temp = styled.div`
    display:flex;
    `

        const CurrentPresent = ({ 
            error, 
            loading,
            weatherResults,
            searchTerm,
            handleSubmit,
            updateTerm,
            iconImage
           })=> 

            <Container>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="enter city name" value={searchTerm} onChange={updateTerm}/>
                </Form>
                
                {loading ? null : (
                <>
                    <Title>{weatherResults.name}</Title>
                    <Icon 
                        bgUrl={`https://openweathermap.org/img/wn/${iconImage.icon}@2x.png`} 
                        alt={iconImage.description}>
                    </Icon>
                    
                </>
                )
                }
            </Container>

            CurrentPresent.propTypes={
                
                error : PropTypes.string,
                loading : PropTypes.bool.isRequired,
                weatherResults : PropTypes.object,
                searchTerm : PropTypes.string,
                handleSubmit : PropTypes.func.isRequired,
                updateTerm: PropTypes.func.isRequired,
                iconImage:PropTypes.object
                
            }

            
export default CurrentPresent
