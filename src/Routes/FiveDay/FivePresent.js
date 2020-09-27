import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"
import { Line } from 'react-chartjs-2'; 
/* import MainCart from "./MainChart" */
/* import Section from "../../Components/Section" */

const Container = styled.div`
    padding:0 20px;
    
`;
const Form = styled.form`
    margin-bottom :50px;
    width:100%;
    `;

const Input = styled.input`
    all:unset;
    font-size:28px;
    width:100%;
`;
const FivePresent = ( {fiveResults, error, loading, searchWords,handleSubmit,handleChange}) => {


const    time = fiveResults.map(five=>five.dt_txt);
const    temp = fiveResults.map(five=>five.main.temp);

 const times = time.map(timee=>timee.toString())

console.log(temp,times) 

    const chartData=({
        
        labels :time,
        datasets:[
            {label : "london",
             data:temp,
             backgroundColor:["rgba(75,192,192,0.6)"],
             borderWidth:.5
               }
        ]
    })

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="enter your city" onChange={handleChange} value={searchWords}> 
                </Input>
            </Form>
             {loading ? null :
             (<>
             <h5>{searchWords}</h5>
              <Line data={chartData}/> 
             {/*  {
                 fiveResults.map(five=>
                   ( <Line
                        searchWords={searchWords}
                        key={five.dt}
                        id={five.dt}
                        temp={five.main.temp}
                        date={five.dt_txt}
                    />)
                               
                   
                    )
                
                           
                        
                
             } 
              */}
            
            </> 
             )

            } 
        </Container>
    )
}


FivePresent.propTypes ={
    fiveResults:PropTypes.array,
    error: PropTypes.string,
    loading:PropTypes.bool.isRequired , 
    searchWords:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired
}


export default FivePresent