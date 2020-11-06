import React from 'react';
import CreateProductItem from "./CreateProductItem";
import {connect} from "react-redux";
import {addNewProduct, changeNewProductData} from "../../redux/reducer";



class CreateProductItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.newProduct};
        this.handleChange = this.handleChange.bind(this);
        // this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange = e => {
        this.props.changeNewProductData({key:e.target.name, value:e.target.value})

    }
    // handleUploadFile = e => {
    //     let reader = new FileReader();
    //     let result;
    //     reader.onload =function(){result = reader.result};
    //     reader.readAsDataURL(e.target.files[0])
    //     debugger
    //     this.props.changeNewProductImg(result)
    // }
    handleSubmit = () => {
        this.props.addNewProduct()
    }
    render() {

        const {name,description,img,price} = this.props.newProduct;
        return <CreateProductItem
                    name = {name}
                    description = {description}
                    img = {img}
                    price = {price}
                    handleChange = {this.handleChange}
                    handleUploadFile = {this.handleUploadFile}
                    handleSubmit ={this.handleSubmit}
        />
    }
}
const mapStateToProps = state => {

    return {
        newProduct: state.newProduct
    }
}
export default connect(mapStateToProps,{changeNewProductData, addNewProduct})(CreateProductItemContainer)
