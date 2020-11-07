import React from 'react';


const Button = props => {
    return <button  className={props.style} onClick={props.handleClick || null}>{props.value}</button>
}
export default Button
