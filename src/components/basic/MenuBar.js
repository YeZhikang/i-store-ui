import React, { useContext, useReducer } from "react";
import classDefine from "../../utils/class-definition";
import MenuContext from "../../utils/context/menu-context";
import { useRouteMatch, useHistory } from 'react-router-dom'

// vertical

const MenuBar = (props) => {
    const { state, dispatch } = useContext(MenuContext)
    const classList = classDefine('ye-menu-bar', [], ['type'], props)

    return (
        <div className={ classList } style={props.style}>
            {
                props.menu.map(item => (
                    <MenuItem
                        key={ item.name }
                        item={ item }
                        flag={ item.name === state.name }
                    />
                ))
            }
        </div>
    )
}

const MenuItem = ({ item, flag }) => {

    const { path, url } = useRouteMatch();
    const history = useHistory();
    const { state, dispatch } = useContext(MenuContext)

    const handleChangeMenu = () => {
        history.push(`${path}${item.url}`)
        dispatch({
            type: 'CHANGE',
            value: item
        })
    }

    return (
        <div
            onClick={ handleChangeMenu }
            className={ `ye-menu-bar__menu-item ${ flag ? 'ye-menu-bar__menu-item--active' : '' }` }
        >
            { item.label }
        </div>
    )
}

export default MenuBar
