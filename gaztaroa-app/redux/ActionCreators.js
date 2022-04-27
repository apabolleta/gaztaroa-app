import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../common/common';

export const fetchComments = () => (dispatch) => {
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

export const commentsFailed = (errmsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmsg
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

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
    type: ActionTypes.ADD_TRIPS,
    payload: trips
});

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
    type: ActionTypes.ADD_HEADERS,
    payload: headers
});

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
    type: ActionTypes.ADD_ACTIVITIES,
    payload: activities
});