import { 
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    GET_CATEGORIES_REQUEST
} from '../../constants/actionTypes';

const initialState = {
    categories: [],
    loader: true,
    error: false
};

export default categories = (state = initialState, action) => {
    switch(action.type) {
        case GET_CATEGORIES_REQUEST: 
            return {
                ...state,
                loader: true
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loader: false,
                categories: action.categories
            };
        case GET_CATEGORIES_FAILURE: 
            return {
                ...state,
                loader: false,
                error: true
            };

        default: return state;
    }
}