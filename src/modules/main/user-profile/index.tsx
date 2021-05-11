import React, {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {UserInfo} from "./user-info/user-info";
import {useRootSelector} from "store/index.reducer";
import './user-profile.scss'
import {RepoList} from "./repo-list/repo-list";
import {ROUTE} from "constants/routes";
import {getUserProfileActions} from "store/user-profile/user-profile.action";
import {getUserProfileThunk} from "store/user-profile/user-profile.thunk";
import {HeaderLayout} from "layouts/header/header";
import {Loader} from "shared/loader/loader";

export const UserProfile: React.FC = () => {
    const l = useLocation();
    const h = useHistory();
    const d = useDispatch();
    const {userProfileState} = useRootSelector();
    // const debouncedSearchTerm = useDebounce(userProfileState.repoSearch, 350);
    const username = l.pathname.split('/').splice(-1, 1)[0]

    const goToUserListPage = useCallback(() => {
        h.push(ROUTE.users)
        d(getUserProfileActions.cancel())
    }, [d, h])

    const goToGithubRepoUrl = (url: string) => window.open(url, '_blank')

    useEffect(() => {
        if (userProfileState.userProfile === null && !userProfileState.isLoading && !userProfileState.error) {
            d(getUserProfileThunk(username))
        }
    }, [d, l, username, userProfileState.userProfile, userProfileState.isLoading, userProfileState.error])

    // useEffect(() => {
    //     if (debouncedSearchTerm.length) {
    //         d(getFilteredRepoListThunk(username, debouncedSearchTerm))
    //     }
    // }, [d, username, debouncedSearchTerm])

    return (
        <HeaderLayout
            logoHandler={() => goToUserListPage()}
            // searchHandler={(value: string) => d(setRepoListSearchAction(value))}
            // searchText={'Enter user`s repository...'}
        >
            {
                !userProfileState.error ? (
                    userProfileState.userProfile && userProfileState.userRepos
                        ? (
                            <div className='user-profile'>
                                <UserInfo
                                    user={{
                                        'img': userProfileState.userProfile.avatar_url,
                                        'username': userProfileState.userProfile.login,
                                        'email': userProfileState.userProfile.email,
                                        'location': userProfileState.userProfile.location,
                                        'joinDate': userProfileState.userProfile.created_at,
                                        'followers': userProfileState.userProfile.followers,
                                        'following': userProfileState.userProfile.following,
                                    }}
                                />
                                <RepoList
                                    repos={userProfileState.userRepos}
                                    goToGithubRepoUrl={(url: string) => goToGithubRepoUrl(url)}
                                />
                            </div>
                        ) : <Loader/>
                ) : (
                    <div className='error'>
                        <p>{userProfileState.error}...</p>
                    </div>
                )
            }
        </HeaderLayout>
    )
}