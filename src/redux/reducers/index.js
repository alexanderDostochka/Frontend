import { combineReducers } from 'redux'
import categories from '../reducers/categories';
import docs from '../reducers/docs';
import doc from '../reducers/doc';

export default combineReducers({
    categories,
    docs,
    doc
});