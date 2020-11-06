import React from "react";
import ControlButtons from "../controlButtons/ControlButtons";


const ProductItem = props => {
    return  <div className="product">
        <ControlButtons
            id = {props.id}
            pinnedItem = { props.pinnedItem}
            pinProduct = {props.pinProduct}
            deleteItem = {props.deleteItem}
            product = {props.product}
        />
        <div className="imageWrapper">
            <img src={props.img} alt={props.name}/>
        </div>
        <div className="productName">
            {props.name}
        </div>
        <div className="productDescription">
            {props.description}
        </div>
        <div className="productPrice">
            {props.price} $
        </div>
    </div>
}
export default ProductItem;
