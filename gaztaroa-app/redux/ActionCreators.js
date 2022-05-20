import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../common/common';

// -----------------------------------------------
// comments
// -----------------------------------------------

export const fetchComments = () => (dispatch) => {

    dispatch(commentsLoading());

    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmsg = new Error(error.message);
            throw errmsg;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const commentsFailed = (errmsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmsg
});

export const addComments = (comments) => ({
    type: ActionTypes.COMMENTS_ADD,
    payload: comments
});

// -----------------------------------------------
// trips
// -----------------------------------------------

export const fetchTrips = () => (dispatch) => {

    dispatch(tripsLoading());

    return fetch(baseUrl + 'trips')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmsg = new Error(error.message);
            throw errmsg;
      })
    .then(response => response.json())
    .then(trips => dispatch(addTrips(trips)))
    .catch(error => dispatch(tripsFailed(error.message)));
};

export const tripsLoading = () => ({
    type: ActionTypes.TRIPS_LOADING
});

export const tripsFailed = (errmsg) => ({
    type: ActionTypes.TRIPS_FAILED,
    payload: errmsg
});

export const addTrips = (trips) => ({
    type: ActionTypes.TRIPS_ADD,
    payload: trips
});

// -----------------------------------------------
// headers
// -----------------------------------------------

export const fetchHeaders = () => (dispatch) => {

    dispatch(headersLoading());

    return fetch(baseUrl + 'headers')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmsg = new Error(error.message);
            throw errmsg;
        })
    .then(response => response.json())
    .then(headers => dispatch(addHeaders(headers)))
    .catch(error => dispatch(headersFailed(error.message)));
};

export const headersLoading = () => ({
    type: ActionTypes.HEADERS_LOADING
});

export const headersFailed = (errmsg) => ({
    type: ActionTypes.HEADERS_FAILED,
    payload: errmsg
});

export const addHeaders = (headers) => ({
    type: ActionTypes.HEADERS_ADD,
    payload: headers
});

// -----------------------------------------------
// activities
// -----------------------------------------------

export const fetchActivities = () => (dispatch) => {

    dispatch(activitiesLoading());

    return fetch(baseUrl + 'activities')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            var errmsg = new Error(error.message);
            throw errmsg;
        })
    .then(response => response.json())
    .then(activities => dispatch(addActivities(activities)))
    .catch(error => dispatch(activitiesFailed(error.message)));
};

export const activitiesLoading = () => ({
    type: ActionTypes.ACTIVITIES_LOADING
});

export const activitiesFailed = (errmsg) => ({
    type: ActionTypes.ACTIVITIES_FAILED,
    payload: errmsg
});

export const addActivities = (activities) => ({
    type: ActionTypes.ACTIVITIES_ADD,
    payload: activities
});

// -----------------------------------------------
// favorites
// -----------------------------------------------

export const postFavorite = (tripId) => (dispatch) => {
    setTimeout(() => {
        dispatch(addFavorite(tripId));
    }, 2000);
};

export const addFavorite = (tripId) => ({
    type: ActionTypes.FAVORITES_ADD,
    payload: tripId
});