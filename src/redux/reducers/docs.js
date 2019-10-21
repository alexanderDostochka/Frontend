import { 
    GET_DOCS_SUCCESS,
    GET_DOCS_REQUEST
} from '../../constants/actionTypes';

const initialState = {
    docs: [],
    loader: true
};

export default docs = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOCS_REQUEST: 
            return {
                ...state,
                loader: true
            };
        case GET_DOCS_SUCCESS:
            return {
                ...state,
                loader: false,
                docs: action.docs
        };

        default: return state;
    }
}