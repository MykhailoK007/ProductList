import React from 'react'
import ProductItemContainer from "../ProductItem/ProductItemContainer";
import {NavLink} from "react-router-dom";
import classes from './ProductList.module.css'
import Button from "../Button/Button";

const ProductList = (props) =>{

    return <div>
        <div className={classes.newProductBtnWrapper}>
            <NavLink to='/new' >
                <Button style={classes.newProductBtn} value="+"/>
            </NavLink>
        </div>

        <div className={classes.productList}>
            {

                props.products.map(item => {

                return <ProductItemContainer
                    deleteItem = {props.deleteItem}
                    key = {item.id}
                    product = {item}
                    pinProduct = {props.pinProduct}
                />
            })}
        </div>


    </div>
}
export default ProductList;


