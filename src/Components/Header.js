import React from 'react'
import styled from "styled-components"
import{Link, withRouter} from "react-router-dom"

const Navigator = styled.ul`
display:flex;
`
const NaviList = styled.li`
border-bottom: 5px solid ${props=>props.current ? "#3498db" : "transparent"};
width:120px; 
line-height:40px;
text-align:center;
`

export default function Header() {
    return (
        <Navigator>
            <Link to="/" >
                <NaviList>weather report</NaviList>
            </Link>
            <Link to="/forecast" >
                <NaviList>5days report</NaviList>
            </Link>
        </Navigator>
    )
}
