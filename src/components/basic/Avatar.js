import React from "react";
import classDefine from "../../utils/class-definition";

const Avatar = (props) => {
    const insideProps = {...props}

    if(!insideProps.url){
        insideProps.url = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }

    const classList = classDefine('ye-avatar', ['circle'], ['size'], props)

    return(
        <div
            className={classList}
            style={{
                ...props.style,
                backgroundImage: `url(${insideProps.url})`
            }}
        >

        </div>
    )
}


export default Avatar
