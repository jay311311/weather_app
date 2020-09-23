import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types"

const Container = styled.div`
width:100%;
text-align:center;
`;
const Main = styled.div``
const Title= styled.div`
color:white;
text-align:center;
`
const Icon= styled.div`
background-image: url(${props=>props.bgUrl});
width:100px;
height:100px;
margin:0 auto;
transform:scale(1.1);
padding-top:5px ;

`
const Description = styled.div`
text-align:center;
margin-bottom:5px;
`


const ReportContainer = styled.div`
&:nth-child(1){font-size:100px};

display:flex;
justify-content:space-between;
align-items:center;
`
const Report = styled.div`
width:120px;
 height:100%;
 padding:10px 0 20px 0;
 margin:0 auto;
  text-align:center;
`
const ReportDetail = styled.span`
text-align:center;
`


const MainScreen = ({ name, iconImg, temps }) =>

(<Container>    
   <Main>
        <Title>{name}의 날씨</Title>
        <Icon 
            bgUrl={`https://openweathermap.org/img/wn/${iconImg.icon}@2x.png`} 
            alt={iconImg.description} >
        </Icon>
        <Description>
            {iconImg.main} ({iconImg.description})
        </Description>
        <ReportContainer>
        <Report>
            <ReportDetail>
                현재  {Math.round(temps.temp - 273.15) } &#176;C
            </ReportDetail>
        </Report>
        </ReportContainer>    
    </Main>    
    <ReportContainer>
        <Report>
            <ReportDetail>
               최고기온  {Math.round(temps.temp_max - 273.15) } &#176;C
            </ReportDetail>
        </Report>
        <Report>
            <ReportDetail>
                최저기온   {Math.round(temps.temp_min - 273.15) } &#176;C
            </ReportDetail>
        </Report>
    </ReportContainer>
    <ReportContainer>
        <Report>
            <ReportDetail>
                체감기온 {Math.round(temps.feels_like - 273.15) } &#176;C
            </ReportDetail>
        </Report>
        <Report>
            <ReportDetail>
                습도   {Math.round(temps.humidity) } %
            </ReportDetail>
        </Report>
    </ReportContainer>
</Container>
)

MainScreen.propTypes={
    iconImg : PropTypes.object,
    title : PropTypes.string,
    temps : PropTypes.object
}



export default MainScreen;