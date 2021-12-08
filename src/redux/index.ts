import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger'
import { Store } from 'redux';

import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import rootSaga from './saga';
import persictConfig from './persistConfig';

const persistedReducer = persistReducer(persictConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

export type AppState = ReturnType<typeof rootReducer>;

const store: Store | any = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(
            sagaMiddleware, logger)
    ));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;