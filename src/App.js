import React from 'react';
import './App.css';
import ProductListContainer from "./Components/ProductList/ProductListContainer";
import {Route} from "react-router-dom";
import CreateProductItemContainer from "./Components/CreateProductItem/CreateProductItemContainer";

function App() {
  return (
    <div className="App">
      <header>
        Product List
      </header>

        <Route path='/' exact>
            <ProductListContainer/>
        </Route>
        <Route path='/new' exact>
            <CreateProductItemContainer/>
        </Route>

    </div>
  );
}

export default App;
