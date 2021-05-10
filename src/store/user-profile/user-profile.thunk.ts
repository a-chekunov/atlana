import {AppThunk} from "../index.thunk";
import {getUserProfileActions} from "./user-profile.action";
import {IFullProfileInfo, IUserProfileOriginal, IUserRepoOriginal} from "models/user-profile.models";
import {UserProfileApi} from "api/user-profile.api";
import {reformatUserProfile} from "helpers/reformate-data/user-profile";

export const getUserProfileThunk = (username: string): AppThunk => async dispatch => {
    dispatch(getUserProfileActions.request());
    try {
        const profile: IUserProfileOriginal = await UserProfileApi.UserDetails(username)
        const repos: IUserRepoOriginal[] = await UserProfileApi.UserRepos(username)
        const reformatedData: IFullProfileInfo = reformatUserProfile(profile, repos)
        dispatch(getUserProfileActions.success({profile: reformatedData.profile, repos: reformatedData.repos}));
    } catch (error) {
        dispatch(getUserProfileActions.failure(error));
    }
}

// export const getFilteredRepoListThunk = (username: string, searchQuery: string): AppThunk => async dispatch => {
//     dispatch(getFilteredUserRepoListActions.request());
//     if (searchQuery.length) {
//         try {
//             const filteredData: any = await UserListApi.FilteredUserRepos(username, searchQuery);
//             dispatch(getFilteredUserRepoListActions.success(filteredData.items));
//         } catch (error) {
//             dispatch(getFilteredUserRepoListActions.failure(error));
//         }
//     }
// };