import axios from '../helpers/axios';
import { productConstants } from './constants';

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/product/${slug}`);
        // console.log(res);
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_ALL_PRODUCT_SLUG,
                payload: res.data
            })
        }else{
            // dispatch({
            //     type: productsConstants.GET_ALL_PRODUCT_SLUG,
            // })
        }
    } 
}



export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const { cid, type } = payload.params;
            const res = await axios.get(`/page/${cid}/${type}`);
            dispatch({ type: productConstants.GET_PRODUCT_PAGE_REQUEST });
            if (res.status === 200) {
                const { page } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_SUCCESS,
                    payload: { page }
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: productConstants.GET_PRODUCT_PAGE_FAILURE,
                    payload: { error }
                });
            }
        } catch(error) {
            console.log(error)
        }
    }
}


