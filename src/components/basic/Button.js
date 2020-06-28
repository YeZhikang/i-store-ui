import React from "react";
import classDefine from "../../utils/class-definition";

const Button = (props) => {

    const classList =
        classDefine('ye-button', ['block', 'outlined', 'text'], ['type','size'], props)
    return (
        <button
            onClick={() => props.onClick()}
            className={classList}
            style={props.style}
        >
            { props.children }
        </button>
    )
}

export default Button
