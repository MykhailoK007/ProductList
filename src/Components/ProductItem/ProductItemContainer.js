import React from 'react';
import ProductItem from "./ProductItem";
import {connect} from "react-redux";
import {deleteItem, removePinnedItem, setPinnedItem} from "../../redux/reducer";


class  ProductItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.pinProduct = this.pinProduct.bind(this);

    }
    pinProduct =product => {
        if(!Object.keys(this.props.pinnedItem).length){
            this.props.setPinnedItem(product)
        }else{
            this.props.removePinnedItem()
        }
    }
    render() {
        let {id, name, description, img, price} = this.props.product;

        return <ProductItem
            id = {id}
            name = {name}
            description = {description}
            img = {img  }
            price = {price}
            deleteItem = {this.props.deleteItem}
            key = {id}
            pinProduct = {this.pinProduct.bind(this)}
            pinnedItem = {this.props.pinnedItem}
            product = {this.props.product}
        />
    }


}
const mapStateToProps = state => {
    return {
        productList:state.products,
        pinnedItem:state.pinnedItem,
        productsListLocal:state.productsListLocal,

    }
}
export default connect(mapStateToProps, {deleteItem, setPinnedItem, removePinnedItem})(ProductItemContainer)
