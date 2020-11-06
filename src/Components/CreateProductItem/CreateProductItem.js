import React from 'react';
import {NavLink} from "react-router-dom";


const CreateProductItem = props => {

    return <form className='formWrapper'>
        <h2>Add product</h2>
        <div className="inputWrapper">
            <span>Name</span>
            <input type="text" name = "name" onChange={props.handleChange} value={props.name}/>
        </div>
        <div className="inputWrapper">
            <span>Description</span>
            <input type="text" name = "description"  onChange={props.handleChange} value = {props.description}/>
        </div>

        <div className="inputWrapper">
            <span>Price</span>
            <input type="number" name = "price" onChange={props.handleChange} value={props.price}/>
        </div>
        {/*<div className="inputImageWrapper">*/}
        {/*    <span>Image</span>*/}
        {/*    <input type="file" name = 'img'  onChange={props.handleUploadFile} />*/}
        {/*</div>*/}
        <NavLink to = '/' className="formSubmitWrapper">
            <button onClick={props.handleSubmit}>Accept</button>
            <button>Cancel</button>
        </NavLink>
    </form>
}

export default CreateProductItem;
