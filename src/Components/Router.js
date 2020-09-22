import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Header from "./Header"
import Current from "Routes/Current";
import FiveDay from "Routes/FiveDay";



export default () => (
    <Router>
        <>
        <Header/>
        <Switch>
        <Route path="/" exact component={Current} />
        <Route path="/forecast"  component={FiveDay} />
        <Redirect from ="*" to="/"/>
        </Switch>
        {/*:id의 의미는 :뒤에오는 것은 무엇이든 와도됨*/}
        </>
    </Router>
)