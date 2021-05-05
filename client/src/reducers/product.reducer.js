import { productConstants } from '../actions/constants';

const initState ={
    products: [],
    productsByPrice: {
        under6k: [],
        under10k: [],
        under20k: [],
        under30k: [],
        under40k: [],
        above40k: []
    }
}

export default (state = initState, action) => {
    switch(action.type){
        case productConstants.GET_ALL_PRODUCT_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }
            }
            break;
    }
    return state;
}