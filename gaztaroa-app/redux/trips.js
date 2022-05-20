import * as ActionTypes from './ActionTypes';

export const trips = (state = { isLoading: true,
                                errMsg: null,
                                trips:[]
                               },
                      action) =>
{
    switch (action.type) {
        case ActionTypes.TRIPS_ADD:
            return {...state, isLoading: false, errMsg: null, trips: action.payload};

        case ActionTypes.TRIPS_LOADING:
            return {...state, isLoading: true, errMsg: null, trips: []}

        case ActionTypes.TRIPS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload};

        default:
            return state;
    }
};