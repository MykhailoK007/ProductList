import React from 'react'
import {connect} from "react-redux";
import ProductList from "./ProductList";
import {removePinnedItem, setPinnedItem} from "../../redux/reducer";

class ProductListContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){

        return <ProductList
                            products = {this.props.productsListLocal || this.props.productList}
                            productsListLocal = {this.props.productsListLocal}
        />
    }
}

let mapStateToProps = (state) =>{

    return {
        productList:state.products,
        pinnedItem: state.pinnedItem,
        productsListLocal:state.productsListLocal
    }
}
export default connect(mapStateToProps, {setPinnedItem, removePinnedItem})(ProductListContainer);
