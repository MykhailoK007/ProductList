import React from 'react';
import ProductItem from "./ProductItem";
import {connect} from "react-redux";
import {deleteItem, removePinnedItem, setPinnedItem} from "../../redux/reducer";


class  ProductItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.pinProduct = this.pinProduct.bind(this);
        this.asd = this.asd.bind(this);

    }
    pinProduct =product => {
        let promise = new Promise((res) => {
            if (!Object.keys(this.props.pinnedItem).length) {
                res(this.props.setPinnedItem(product))
            } else {
                res(this.props.removePinnedItem())
            }
        })
        promise.then(() => {
            this.props.changeLocalProductList(product)
        })

    }
    asd = (id) => {
        let promise = new Promise(res => {
            res(this.props.deleteItem(id))
        })
        promise.then(() => {
            this.props.updateLocalProductList()
        })
    }
    render() {
        let {id, name, description, img, price} = this.props.product;
        return <ProductItem
            id = {id}
            name = {name}
            description = {description}
            img = {img  }
            price = {price}
            deleteItem = {this.asd}
            key = {id}
            pinProduct = {this.pinProduct}
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
