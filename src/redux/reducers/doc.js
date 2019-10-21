import { 
    GET_DOC_SUCCESS,
    GET_DOC_REQUEST
} from '../../constants/actionTypes';

const initialState = {
    doc: [],
    loader: true
};

export default doc = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOC_REQUEST: 
            return {
                ...state,
                loader: true
            };
        case GET_DOC_SUCCESS:
            return {
                ...state,
                loader: false,
                doc: action.doc
        };

        default: return state;
    }
}