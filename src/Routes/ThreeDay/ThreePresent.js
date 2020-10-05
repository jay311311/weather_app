import React from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"
import { Line } from 'react-chartjs-2'; 
import Message from "../../Components/Message"

const Container = styled.div`

text-align:center;
    padding:0 10px;
`;
const Form = styled.form`
    margin-bottom :50px;
    text-align:center;
    width:100%;
    `;

const Input = styled.input`
    all:unset;
    font-size:20px;
    width:100%;
`;

const Title = styled.div`
font-size:1.7rem;
padding:10px 0;
`
const Standard = styled.span`
font-size:.8rem;
color:#718093;

`

const FivePresent = ( {threeResults, error, searchWords,handleSubmit,handleChange}) => {

const time = threeResults.map(three=>three.dt_txt.slice(5,13)+"h");
const temp = threeResults.map(three=>three.main.temp);

    const chartData=({
        labels :time,
        datasets:[
            {label : searchWords,
             data:temp,
             backgroundColor:["rgba(75,192,192,0.6)"],
             borderWidth:4,
             pointBackgroundColor:"rgba(75,192,192,0.9)"
               }
            ]
        })




   console.log(time)
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="enter your city" onChange={handleChange} value={searchWords}> 
                </Input>
            </Form>
             {threeResults.length > 0 ? 
             (
             <>
             <Title>{searchWords}'s temperature </Title>
             <Standard>units is "Celsius(°C)"</Standard>
            <Line data={chartData} />
            </> 
             ) : <Message color="red" text={" "}/>
            }
             {error && <Message color="gray" text={" Check Your Letter (in English)"}/>}
           
        </Container>
    )
}


FivePresent.propTypes ={
    time:PropTypes.string,
    temp:PropTypes.number,
    threeResults:PropTypes.array,
    error: PropTypes.string,
    loading:PropTypes.bool.isRequired , 
    searchWords:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired
}


export default FivePresent