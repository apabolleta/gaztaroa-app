import * as ActionTypes from './ActionTypes';

export const headers = (state = { isLoading: true,
                                  errMsg: null,
                                  headers:[]
                                },
                        action) =>
{
    switch (action.type) {
        case ActionTypes.HEADERS_ADD:
            return {...state, isLoading: false, errMsg: null, headers: action.payload};

        case ActionTypes.HEADERS_LOADING:
            return {...state, isLoading: true, errMsg: null, headers: []}

        case ActionTypes.HEADERS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload};

        default:
            return state;
    }
};