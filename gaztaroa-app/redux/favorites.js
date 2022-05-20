import * as ActionTypes from './ActionTypes';

export const favorites = (state = { favorites: []
                                  },
                          action) =>
{
    switch (action.type) {
        case ActionTypes.FAVORITES_ADD:
            if (state.favorites.includes(action.payload)) {
                return state;
            }
            return {...state, favorites: state.favorites.concat(action.payload)};

        default:
            return state;
    }
}