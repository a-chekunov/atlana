import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as fromRoot from './index.reducer';

function configureStore() {
    const enhancer = applyMiddleware(thunk);
    return createStore(fromRoot.reducers, {}, enhancer);
}

export const store = configureStore();
