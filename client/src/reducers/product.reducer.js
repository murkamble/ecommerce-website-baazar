import { productConstants } from '../actions/constants';

const initState = {
    products: [],
    productsByPrice: {
        under6k: [],
        under10k: [],
        under20k: [],
        under30k: [],
        under40k: [],
        above40k: []
    },
    pagRequest: false,
    page: {},
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCT_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_REQUEST:
            state = {
                ...state,
                pagRequest: true
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_SUCCESS:
            state = {
                ...state,
                page: action.payload.page,
                pagRequest: false
            }
            break;
        case productConstants.GET_PRODUCT_PAGE_FAILURE:
            state = {
                ...state,
                pagRequest: false,
                error: action.payload.error
            }
            break;

    }
    return state;
}