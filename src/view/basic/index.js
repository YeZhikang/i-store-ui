import React, { useEffect, useReducer, useRef } from "react";
import {useRouteMatch, useHistory, Switch, Route, useLocation} from 'react-router-dom'

import SearchBar from "../../components/functional/SearchBar";
import MenuBar from "../../components/basic/MenuBar";
import MenuContext from "../../utils/context/menu-context";
import SubArea from "./SubArea";
import {routeMenu as menu} from "../../utils/route-data/basic-index";
import MenuMore from "../../components/functional/MenuMore";
/**
 *
 * 基础主页
 * 商场入口页面
 */

const menuReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return action.value
        default:
            return state
    }
}

const BasicIndex = () => {
    const [ state, dispatch ] = useReducer(menuReducer, {name: 'index', label: '首页', url:'/'})
    const location = useLocation()
    const match = useRouteMatch()



    return (
        <MenuContext.Provider value={ { state, dispatch } }>
            <div>
                <SearchBar/>
                <div className={'fa normal-space'}>
                    <MenuBar style={{ width: '93%' }} menu={ menu }/>
                    <MenuMore/>
                </div>
            </div>
            <Switch>
                <Route exact path={match.path}>
                    <>
                </Route>
                <Route exact path={`${match.path}/:area`}>
                    <SubArea/>
                </Route>
            </Switch>
        </MenuContext.Provider>
    )
}

export default BasicIndex
