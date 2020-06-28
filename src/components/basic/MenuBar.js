import React from "react";
import classDefine from "../../utils/class-definition";
// vertical

const MenuBar = (props) => {
    const classList = classDefine('ye-menu-bar', [], ['type'], props)

    return (
        <div className={ classList }>

        </div>
    )
}

const MenuItem = ({ item }) => {
    return(
        <div className={'ye-menu-bar__menu-item'}>

        </div>
    )
}

export default MenuBar
