import { createAction } from 'redux-actions';
import { GET_CATEGORIES_REQUEST } from '../../constants/actionTypes';
 
export const getCategories = createAction(GET_CATEGORIES_REQUEST);