import React from 'react'
import ProductItemContainer from "../ProductItem/ProductItemContainer";
import {NavLink} from "react-router-dom";


const ProductList = (props) =>{

    return <div>
        <div className="createButton">
            <NavLink to='/new' >
                <input type="button" value="+"/>
            </NavLink>
        </div>

        <div className='productList'>
            {

                props.products.map(item => {

                return <ProductItemContainer
                    deleteItem = {props.deleteItem}
                    key = {item.id}
                    product = {item}
                />
            })}
        </div>


    </div>
}
export default ProductList;


