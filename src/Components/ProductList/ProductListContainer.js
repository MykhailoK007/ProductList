import React from 'react'
import {connect} from "react-redux";
import ProductList from "./ProductList";
import {removePinnedItem, setPinnedItem} from "../../redux/reducer";

class ProductListContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            localProductList:[...this.props.productList]
        }
        this.changeLocalProductList = this.changeLocalProductList.bind(this);
        this.updateLocalProductList = this.updateLocalProductList.bind(this)

    }




    changeLocalProductList(product){
        if(product && Object.keys(product).length !== 0){
            this.setState({localProductList:[{...product},...this.props.productsListLocal]});
        }else{

            this.setState({localProductList:[...this.props.productList]})
        }

    }
    updateLocalProductList(){
        this.setState({localProductList:[...this.props.productsListLocal]})
    }
    render(){
        debugger
        return <ProductList
                            products = {this.state.localProductList}
                            productsListLocal = {this.props.productsListLocal}
                            changeLocalProductList ={this.changeLocalProductList}
                            updateLocalProductList = {this.updateLocalProductList}
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
