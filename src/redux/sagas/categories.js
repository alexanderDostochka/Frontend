import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE } from '../../constants/actionTypes';
import { put, call } from 'redux-saga/effects'
import api from '../../api';

export function* getCategories(){
    try {
        const categories = yield call(api.categories);
        yield put({ type: GET_CATEGORIES_SUCCESS, categories: categories.data });
    } catch (err) {
        yield put({ type: GET_CATEGORIES_FAILURE });
    }
}