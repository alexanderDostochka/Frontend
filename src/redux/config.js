import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import logger from 'redux-logger'
import rootReducers from './reducers';
import rootSagas from './sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducers,
        applyMiddleware(sagaMiddleware, logger)
    );

    sagaMiddleware.run(rootSagas);

    return store;
}

export default configureStore;