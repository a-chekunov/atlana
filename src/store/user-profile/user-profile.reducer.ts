import {
    IUserProfileReformated,
    IUserRepoReformated
} from 'models/user-profile.models';
import {ActionType, createReducer} from 'typesafe-actions';
import {
    setRepoListSearchAction,
    getUserProfileActions
} from "./user-profile.action";

export interface IUserProfileState {
    isLoading: boolean;
    repoSearch: string;
    userProfile: IUserProfileReformated | null;
    userRepos: IUserRepoReformated[] | null;
    // filteredRepos: IUserRepoOriginal[];
    error: string | null;
}

const initialState: IUserProfileState = {
    isLoading: false,
    repoSearch: '',
    userProfile: null,
    userRepos: null,
    // filteredRepos: [],
    error: null,
};

type UserProfileActions = ActionType<typeof getUserProfileActions |
    typeof setRepoListSearchAction>;

export const userProfileReducer = createReducer<IUserProfileState, UserProfileActions>(initialState)
    .handleAction(
        setRepoListSearchAction,
        (state, action): IUserProfileState => {
            return {
                ...state,
                repoSearch: action.payload
            };
        }
    )
    .handleAction(
        getUserProfileActions.request,
        (state): IUserProfileState => ({
            ...state,
            isLoading: true,
        })
    )
    .handleAction(
        getUserProfileActions.success,
        (state, action): IUserProfileState => {
            return {
                ...state,
                isLoading: false,
                userProfile: action.payload.profile,
                userRepos: action.payload.repos,
                error: null,
            };
        }
    )
    .handleAction(
        getUserProfileActions.failure,
        (state, action): IUserProfileState => {
            return {
                ...state,
                isLoading: false,
                userProfile: null,
                userRepos: null,
                error: action.payload,
            };
        }
    )
    .handleAction(
        getUserProfileActions.cancel,
        (state): IUserProfileState => {
            return {
                ...state,
                isLoading: false,
                userProfile: null,
                userRepos: null,
                error: '',
            };
        }
    );
// .handleAction(
//     getFilteredUserRepoListActions.request,
//     (state): IUserProfileState => ({
//         ...state,
//         isLoading: true,
//     })
// )
// .handleAction(
//     getFilteredUserRepoListActions.success,
//     (state, action): IUserProfileState => {
//         return {
//             ...state,
//             isLoading: false,
//             filteredRepos: action.payload,
//             error: null,
//         };
//     }
// );
// .handleAction(
//     getFilteredUserRepoListActions.failure,
//     (state, action): IUserProfileState => {
//         return {
//             ...state,
//             isLoading: false,
//             userProfile: null,
//             userRepos: null,
//             filteredRepos: [],
//             error: action.payload,
//         };
//     }
// );
