import {IUserListReformated} from 'models/user-list.models';
import {ActionType, createReducer} from 'typesafe-actions';
import {
    getFilteredUserListActions,
    getUserListActions,
    setUserListSearchAction
} from "./user-list.action";

export interface IUserListState {
    isLoading: boolean;
    search: string;
    data: IUserListReformated[] | null;
    filteredData: IUserListReformated[];
    error: string | null;
}

const initialState: IUserListState = {
    isLoading: false,
    search: '',
    data: null,
    filteredData: [],
    error: null,
};

type UserListActions = ActionType<typeof getUserListActions |
    typeof getFilteredUserListActions |
    typeof setUserListSearchAction>;

export const userListReducer = createReducer<IUserListState, UserListActions>(initialState)
    .handleAction(
        setUserListSearchAction,
        (state, action): IUserListState => {
            return {
                ...state,
                search: action.payload
            };
        }
    )
    .handleAction(
        getUserListActions.request,
        (state): IUserListState => ({
            ...state,
            isLoading: true,
        })
    )
    .handleAction(
        getUserListActions.success,
        (state, action): IUserListState => {
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                filteredData: action.payload,
                error: null,
            };
        }
    )
    .handleAction(
        getUserListActions.failure,
        (state, action): IUserListState => {
            return {
                ...state,
                isLoading: false,
                data: null,
                error: action.payload,
            };
        }
    )
    .handleAction(
        getFilteredUserListActions.request,
        (state): IUserListState => ({
            ...state,
            isLoading: true,
        })
    )
    .handleAction(
        getFilteredUserListActions.success,
        (state, action): IUserListState => {
            return {
                ...state,
                isLoading: false,
                filteredData: action.payload,
                error: null,
            };
        }
    )
    .handleAction(
        getFilteredUserListActions.failure,
        (state, action): IUserListState => {
            return {
                ...state,
                isLoading: false,
                data: null,
                filteredData: [],
                error: action.payload,
            };
        }
    );
