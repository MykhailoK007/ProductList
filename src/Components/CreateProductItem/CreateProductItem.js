import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './CreateProduct.module.css'
import InputWrapper from "../InputWrapper/InputwWrapper";
import Button from "../Button/Button";

const CreateProductItem = props => {

    return <form className={classes.formWrapper}>
        <h2>Add product</h2>
        <div className={classes.message}>
            {  props.emptyField &&
            <div >Field with * must be filled</div>
            }
            {
                props.errorMessage &&
                    <div>{props.errorMessage}</div>
            }
        </div>

        <InputWrapper buttonStyle={classes.inputWrapper}
                      name = "Name"
                      type="text"
                      value={props.name}
                      handleChange={props.handleChange}
        />
        <InputWrapper buttonStyle={classes.inputWrapper}
                      name = "Description"
                      type="text"
                      value={props.description}
                      handleChange={props.handleChange}
        />
        <InputWrapper buttonStyle={classes.inputWrapper}
                      name = "Price"
                      type="number"
                      value={props.price}
                      handleChange={props.handleChange}
        />
        <InputWrapper buttonStyle={classes.inputImageWrapper}
                      fileInputStyle ={classes.fileInputStyle}
                      name = "Image"
                      type="file"
                      handleChange={props.handleUploadFile}
        />

        <NavLink to = '/' className={classes.formSubmitWrapper}>
            {!props.errorMessage  &&
                <Button style={classes.button} handleClick = {props.handleSubmit} value ="Accept" />
            }
            <Button style={classes.button} value = "Cancel"/>
        </NavLink>
    </form>
}

export default CreateProductItem;
