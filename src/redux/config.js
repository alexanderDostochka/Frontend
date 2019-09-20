import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';

const config = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default config;