import React from 'react'
import styled from "styled-components"
import{Link, withRouter} from "react-router-dom"

const List =styled.ul`
display:flex;
`;
const Header = styled.ul`
display:flex;
`
const Item = styled.li`
width:80px;
height:50px;
text-align:center;
border-bottom: 5px solid ${props=>props.current ? "#3498db" : "transparent"};
transition :  border-bottom .5s ease-in-out;
`;

const Slink = styled(Link)`
height:50px;
display:flex;
align-items:center;
justify-content:center;
`;
export default withRouter ( ({location:{pathname}}) => (
    <Header>

        <List>
            <Item current={pathname === "/"}>
                <Slink  to="/">current</Slink>
            </Item>
            <Item current={pathname === "/forecast"}>
                <Slink  to="/forecast">5days</Slink>
            </Item>
        </List>
    </Header>
));
