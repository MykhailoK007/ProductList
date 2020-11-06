const DELETE_ITEM = "DELETE_ITEM";
const SET_PINNED_ITEM = "SET_PINNED_ITEM";
const REMOVE_PINNED_ITEM = "REMOVE_PINNED_ITEM";
const CHANGE_NEW_PRODUCT_DATA = "CHANGE_NEW_PRODUCT_DATA";
// const CHANGE_NEW_PRODUCT_IMG = "CHANGE_NEW_PRODUCT_IMG";
const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
let initialState = {
    products:[
        {
            id:1,
            name:'Phone',
            description:'It`s the newest phone in the world',
            img:'https://cnet4.cbsistatic.com/img/TnYZfFYsNAf1cc4z1ld-B-Z2zCM=/1200x675/2019/11/07/09be7e4c-9801-4d03-b86d-248f501538ff/iphone-12-render-phone-arena-2.jpg',
            price:"1000"
        },
        {
            id:2,
            name:'Sneakers',
            description: 'It`s comfortable shoes',
            img: 'https://cdn.hswstatic.com/gif/clean-sneakers-2.jpg',
            price:'100'
        },
        {
            id:3,
            name:'Pen',
            description  : 'It`s the most expensive pen ',
            img:"",
            price:'400'
        },
        {
            id:4,
            name:'Laptop',
            description: "It`s a mac",
            img:"https://i.citrus.ua/uploads/shop/9/d/9d7a447ca66cde15350bb8c87afad977.jpg",
            price:"3000"
        }
    ],
    defaultImage:'https://www.bluemountro.com/assets/images/no-image.png',
    pinnedItem:{},
    newProduct:{},
    productsListLocal:null
}
const ProductReducer = (state = initialState, action) => {
        switch(action.type){
            case DELETE_ITEM:
                let localList = state.productsListLocal ? [...state.productsListLocal.filter((item) => item.id !== action.id)]:null

                return {
                    ...state,
                    products: [...state.products.filter((item) => item.id !== action.id)],
                    productsListLocal: localList
                }
            case  SET_PINNED_ITEM:
                    let result = state.products.filter(element => {
                        return element.id !== action.product.id
                    })
                result.unshift(action.product);

                return {
                    ...state,
                    productsListLocal: result,
                    pinnedItem: action.product
                }
            case REMOVE_PINNED_ITEM:
                return {
                    ...state,
                    pinnedItem: {},
                    productsListLocal:null
                }
            case CHANGE_NEW_PRODUCT_DATA:
                return{
                    ...state,
                    newProduct:{
                        ...state.newProduct, [action.data.key]:action.data.value
                    }
                }
            // case CHANGE_NEW_PRODUCT_IMG:
            //     return {
            //         ...state,
            //         newProduct:{...state.newProduct, img:action.data}
            //     }
            case ADD_NEW_PRODUCT:

                let productsListLocal = !!state.productsListLocal ?
                    [...state.productsListLocal,state.newProduct] : null
                return{
                    ...state,
                    products:[...state.products, state.newProduct],
                    productsListLocal:productsListLocal
                }
            default:
                return  state;
    }
}

export const deleteItem = (id) => {
    return {
        type:DELETE_ITEM,
        id
    }
}
export const setPinnedItem = product => {
    return {
        type: SET_PINNED_ITEM,
        product
    }
}
export const removePinnedItem = () => {
    return {
        type:REMOVE_PINNED_ITEM
    }
}
export const changeNewProductData = (data) => {
    return {
        type: CHANGE_NEW_PRODUCT_DATA,
        data
    }
}
// export const changeNewProductImg = (data) => {
//     return {
//         type: CHANGE_NEW_PRODUCT_IMG,
//         data
//     }
// }
export const addNewProduct = () => {
    return {
        type:ADD_NEW_PRODUCT,
    }
}
export default ProductReducer;
