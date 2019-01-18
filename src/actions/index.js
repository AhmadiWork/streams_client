import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
} from "./types";
import {default as streamsApi} from '../apis/streams';
import history from '../history';

export const signIn = userID => {
    return {
        type: SIGN_IN,
        payload: userID
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streamsApi.post('/streams', {...formValues, userId});

    dispatch({type: CREATE_STREAM, payload: response.data});

    // bring back user to stream list page
    history.push('/');
};

export const fetchStream = id => async dispatch => {
    const response = await streamsApi.get(`/streams/${id}`);

    dispatch({type: FETCH_STREAM, payload: response.data});
};

export const fetchStreams = () => async dispatch => {
    const response = await streamsApi.get('/streams');

    dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const deleteStream = id => async dispatch => {
    await streamsApi.delete(`/streams/${id}`);

    dispatch({type: DELETE_STREAM, payload: id});

    // bring back user to stream list page
    history.push('/');
};

export const editStream = (id, formValues) => async dispatch => {
    const response = await streamsApi.patch(`/streams/${id}`, formValues);

    dispatch({type: EDIT_STREAM, payload: response.data});

    // bring back user to stream list page
    history.push('/');
};