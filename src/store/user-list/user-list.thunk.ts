import {AppThunk} from "../index.thunk";
import {UserListApi} from "api/user-list.api";
import {
    getFilteredUserListActions,
    getUserListActions,
} from "./user-list.action";
import {IFilteredUserListOriginal, IUserListOriginal, IUserListReformated} from "models/user-list.models";
import {UserProfileApi} from "api/user-profile.api";
import {reformatUserList} from "helpers/reformate-data/user-list";
import {IUserProfileOriginal} from "../../models/user-profile.models";

export const getUserListThunk = (): AppThunk => async dispatch => {
    dispatch(getUserListActions.request());
    try {
        const data: IUserListOriginal[] = await UserListApi.UserList();
        const profiles: IUserProfileOriginal[] = await Promise.all(data.map(user => UserProfileApi.UserDetails(user.login)));
        const reformatedData: IUserListReformated[] = reformatUserList(profiles, data);
        dispatch(getUserListActions.success(reformatedData));
    } catch (error) {
        dispatch(getUserListActions.failure(error.response.data.message));
    }
};

export const getFilteredUserListThunk = (searchQuery: string): AppThunk => async dispatch => {
    dispatch(getFilteredUserListActions.request());
    if (searchQuery.length) {
        try {
            const filteredData: IFilteredUserListOriginal = await UserListApi.FilteredUserList(searchQuery);
            const profiles: IUserProfileOriginal[] = await Promise.all(filteredData.items.map(user => UserProfileApi.UserDetails(user.login)));
            const reformatedData: IUserListReformated[] = reformatUserList(profiles, filteredData.items);
            dispatch(getFilteredUserListActions.success(reformatedData));
        } catch (error) {
            dispatch(getFilteredUserListActions.failure(error.response.data.message));
        }
    }
};
