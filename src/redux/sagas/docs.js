import { 
    GET_DOCS_SUCCESS, 
    GET_DOCS_FAILURE,
    GET_DOC_SUCCESS,
    GET_DOC_FAILURE 
} from '../../constants/actionTypes';
import { put, call } from 'redux-saga/effects'
import api from '../../api';

export function* getDocs(action){
    try {
        const docs = yield call(api.docs, action.payload.type);
        yield put({ type: GET_DOCS_SUCCESS, docs: docs.data });
    } catch (err) {
        yield put({ type: GET_DOCS_FAILURE });
    }
}

export function* getDoc(action){
    try {
        const doc = yield call(api.doc, action.payload.id);

        yield put({ type: GET_DOC_SUCCESS, doc: doc.data });
    } catch (err) {
        yield put({ type: GET_DOC_FAILURE });
    }
}