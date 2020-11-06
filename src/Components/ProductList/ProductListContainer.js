import React from 'react'
import {connect} from "react-redux";
import ProductList from "./ProductList";

class ProductListContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return <ProductList products = {this.props.productsListLocal || this.props.productList}
                            productsListLocal = {this.props.productsListLocal}
        />
    }
}

let mapStateToProps = (state) =>{

    return {
        productList:state.products,
        productsListLocal:state.productsListLocal
    }
}
export default connect(mapStateToProps)(ProductListContainer);
