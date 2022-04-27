import * as ActionTypes from './ActionTypes';

export const activities = (state = { isLoading: true,
                                     errMsg: null,
                                     activities:[]
                                   },
                           action) =>
{
    switch (action.type) {
        case ActionTypes.ADD_ACTIVITIES:
            return {...state, isLoading: false, errMsg: null, activities: action.payload};

        case ActionTypes.ACTIVITIES_LOADING:
            return {...state, isLoading: true, errMsg: null, activities: []}

        case ActionTypes.ACTIVITIES_FAILED:
            return {...state, isLoading: false, errMsg: action.payload};

        default:
            return state;
    }
};