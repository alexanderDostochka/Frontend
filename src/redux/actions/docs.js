import { createAction } from 'redux-actions';
import { GET_DOCS_REQUEST, GET_DOC_REQUEST } from '../../constants/actionTypes';
 
export const getDocs = createAction(GET_DOCS_REQUEST);
export const getDoc = createAction(GET_DOC_REQUEST);