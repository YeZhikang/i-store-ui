import React, { useContext, useEffect } from "react";
import {useRouteMatch} from 'react-router-dom'

import {routeMenu} from "../../utils/route-data/basic-index";
import MenuContext from "../../utils/context/menu-context";

const SubArea = () => {
    const {state, dispatch} = useContext(MenuContext)

    const match = useRouteMatch()
    const item = routeMenu.find(item => item.name === match.params.area)

    useEffect(() => {
        dispatch({
            type: 'CHANGE',
            value: item
        })
    }, [])

    return(
        <div>{ item.label }</div>
    )
}

export default SubArea
