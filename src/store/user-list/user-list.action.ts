import {IUserListReformated} from "models/user-list.models";
import {createAsyncAction, createAction} from "typesafe-actions";

enum USER_LIST_ACTIONS_TYPE {
    SET_SEARCH = 'SET_SEARCH',
    GET_USER_LIST_REQUEST = 'GET_USER_LIST_REQUEST',
    GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS',
    GET_USER_LIST_FAILURE = 'GET_USER_LIST_FAILURE',
    GET_FILTERED_USER_LIST_REQUEST = 'GET_FILTERED_USER_LIST_REQUEST',
    GET_FILTERED_USER_LIST_SUCCESS = 'GET_FILTERED_USER_LIST_SUCCESS',
    GET_FILTERED_USER_LIST_FAILURE = 'GET_FILTERED_USER_LIST_FAILURE',
}

export const setUserListSearchAction = createAction(USER_LIST_ACTIONS_TYPE.SET_SEARCH)<string>()

export const getUserListActions = createAsyncAction(
    USER_LIST_ACTIONS_TYPE.GET_USER_LIST_REQUEST,
    USER_LIST_ACTIONS_TYPE.GET_USER_LIST_SUCCESS,
    USER_LIST_ACTIONS_TYPE.GET_USER_LIST_FAILURE,
)<void, IUserListReformated[], string>();

export const getFilteredUserListActions = createAsyncAction(
    USER_LIST_ACTIONS_TYPE.GET_FILTERED_USER_LIST_REQUEST,
    USER_LIST_ACTIONS_TYPE.GET_FILTERED_USER_LIST_SUCCESS,
    USER_LIST_ACTIONS_TYPE.GET_FILTERED_USER_LIST_FAILURE,
)<void, IUserListReformated[], string>();