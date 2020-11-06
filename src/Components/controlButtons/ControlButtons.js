import React from "react";
import {NavLink} from "react-router-dom";

const ControlButtons = props => {
    return <NavLink to="/" className="buttonWrapper">
        {   props.pinnedItem.id !== props.id &&
        <input type="button"
               className="pinedButton"
               value="Pin"
               onClick={() => {
                   props.pinProduct(props.product);
               }}
        />}
        {
            props.pinnedItem && props.pinnedItem.id == props.id &&
            <input type="button" className="pinedButton" value="UnPin" onClick={(e)=>{props.pinProduct()}}/>
        }
        <input type="button" className='removeButton' value="X" onClick={() => props.deleteItem(props.id)}/>
    </NavLink>
}

export default ControlButtons
