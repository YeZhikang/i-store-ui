import React from "react";
import BasicIndex from "../view/basic";
import {BrowserRouter, Switch, Route} from 'react-router-dom'


export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <BasicIndex/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
