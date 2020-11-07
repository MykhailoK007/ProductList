import React from "react";
import {NavLink} from "react-router-dom";
import Button from "../Button/Button";
import  classes from '../ProductItem/Productitem.module.css'
const ControlButtons = props => {

    return <NavLink to="/" className={classes.buttonWrapper}>
        {!props.pinnedItem.id &&
        <Button style={classes.pinBtn}
                value="Pin"
                handleClick = {()=>props.pinProduct(props.product)}
        />
        }

        {
            props.pinnedItem.id == props.id &&
            <Button style={classes.pinBtn}
                    value="UnPin"
                    handleClick = {()=>props.pinProduct()}
            />        }
            <Button style={classes.removeBtn}
                    value = "X"
                    handleClick = {() => props.deleteItem(props.id)}
            />
    </NavLink>
}

export default ControlButtons
