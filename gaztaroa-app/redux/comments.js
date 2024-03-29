import * as ActionTypes from './ActionTypes';

export const comments = (state = { isLoading: true,
                                   errMsg: null,
                                   comments:[]
                                 },
                         action) =>
{
    switch (action.type) {
        case ActionTypes.COMMENTS_ADD:
            return {...state, isLoading: false, errMsg: null, comments: action.payload};

        case ActionTypes.COMMENTS_LOADING:
            return {...state, isLoading: true, errMsg: null, comments: []};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload};

        case ActionTypes.COMMENTS_ADD_SINGLE:
            return {...state, isLoading: false, errMsg: null, comments: state.comments.concat(action.payload)}

        default:
            return state;
    }
};