import { 
    GET_CATEGORIES_REQUEST, 
    GET_DOCS_REQUEST,
    GET_DOC_REQUEST
} from '../../constants/actionTypes';
import { takeEvery } from 'redux-saga/effects';

import { getCategories } from './categories';
import { getDocs, getDoc } from './docs';

export default function* rootSagas(){
    yield takeEvery(GET_CATEGORIES_REQUEST, getCategories);
    yield takeEvery(GET_DOCS_REQUEST, getDocs);
    yield takeEvery(GET_DOC_REQUEST, getDoc);
}