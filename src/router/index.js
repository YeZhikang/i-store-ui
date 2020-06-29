import React from "react";
import BasicIndex from "../view/basic";
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom'


export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact from={'/'} to={'/index'}/>
                <Route path={'/index'}>
                    <BasicIndex/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
