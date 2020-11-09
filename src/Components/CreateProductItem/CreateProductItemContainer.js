import React from 'react';
import CreateProductItem from "./CreateProductItem";
import {connect} from "react-redux";
import {addNewProduct, changeNewProductData, changeNewProductImg} from "../../redux/reducer";



class CreateProductItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyField:false,
            errorMessage:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
    }
    handleChange = e => {
        this.props.changeNewProductData({key:e.target.name, value:e.target.value})
    }
    handleUploadFile = e => {
        let file = e.target.files[0];
        debugger
        if(file && (/.jpg|.jpeg|.png|.svg$/).test(file.type)){
            this.setState({
                errorMessage:''
            })
            let reader = new FileReader();
            reader.onload =()=>this.props.changeNewProductImg(reader.result);
            reader.readAsDataURL(file)
        }else{
            this.setState({errorMessage:'The file must be only image'})
        }




    }
    handleSubmit = (e) => {
        const {name,description,price} = this.props.newProduct ;
        if(name && description && price){
            this.props.addNewProduct()
        }else{
            e.preventDefault()
            this.setState({emptyField:true})
        }

    }
    render() {

        const {name,description,img,price} = this.props.newProduct ;
        return <CreateProductItem
                    name = {name}
                    description = {description }
                    img = {img}
                    price = {price}
                    handleChange = {this.handleChange}
                    handleUploadFile = {this.handleUploadFile}
                    handleSubmit ={this.handleSubmit}
                    emptyField = {this.state.emptyField}
                    errorMessage = {this.state.errorMessage}
        />
    }
}
const mapStateToProps = state => {

    return {
        newProduct: state.newProduct
    }
}
export default connect(mapStateToProps,{changeNewProductData, addNewProduct, changeNewProductImg})(CreateProductItemContainer)
