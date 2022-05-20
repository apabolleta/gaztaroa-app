import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { trips } from './trips';
import { comments } from './comments';
import { headers } from './headers';
import { activities } from './activities';
import { favorites } from './favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            trips,
            comments,
            headers,
            activities,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}