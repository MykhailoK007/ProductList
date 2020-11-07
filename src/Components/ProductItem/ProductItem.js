import React from "react";
import ControlButtons from "../controlButtons/ControlButtons";
import classes from './Productitem.module.css'

const ProductItem = props => {
    return  <div className={classes.product}>
        <ControlButtons
            id = {props.id}
            pinnedItem = { props.pinnedItem}
            pinProduct = {props.pinProduct}
            deleteItem = {props.deleteItem}
            product = {props.product}
        />
        <div className={classes.imageWrapper}>
            <img src={props.img} alt={props.name}/>
        </div>
        <div className={classes.productName}>
            {props.name}
        </div>
        <div className={classes.productDescription}>
            {props.description}
        </div>
        <div className={classes.productPrice}>
            {props.price} $
        </div>
    </div>
}
export default ProductItem;
