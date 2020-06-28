import React, { useRef, useState } from "react";
import classDefine from "../../utils/class-definition";
import Button from "./Button";

const Input = React.forwardRef((props,ref) => {
    const [value, setValue] = useState('')
    const inputOuterRef = useRef()
    const classList =
        classDefine('ye-input', ['block', 'round'], [], props)

    const handleFocus = () => {
        inputOuterRef.current.classList.add('ye-input--active')
    }

    const handleBlur = () => {
        inputOuterRef.current.classList.remove('ye-input--active')
    }

    return (
        <div style={props.style} ref={inputOuterRef} className={ classList }>
            { props.extra ? <div className={ 'ye-input__extra' }>
                { props.extra }
            </div> : null }
            <input
                ref={ref}
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleBlur}
                onFocus={handleFocus}
                className={ 'ye-input__container' }
                type={ 'text' }
                placeholder={ props.placeholder }
            />
            { props.method ? <MethodButton name={props.method.name} type={props.method.type} callback={props.method.callback}>

            </MethodButton> : null }
        </div>
    )
})

const MethodButton = ({ name, type, callback }) => {
    return(
        <>
            <button onClick={() => callback()} className={`ye-input__button`}>{ name }</button>
        </>
    )
}

export default Input
