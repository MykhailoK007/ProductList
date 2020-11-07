import React from "react"
const InputWrapper = props => {
        if(props.type !== "file") {
            return <div className={props.buttonStyle}>
                <span>{props.name} <sup> * </sup> </span>
                <input type={props.type} name={props.name.toLowerCase()} onChange={props.handleChange}
                       value={props.value }/>
            </div>
        }else {
           return <div className={props.buttonStyle}>
               <span>{props.name}</span>
               <input type={props.type} name = {props.name.toLowerCase()} onChange={props.handleChange}  className={props.fileInputStyle}/>
           </div>

        }
}
export default  InputWrapper;
