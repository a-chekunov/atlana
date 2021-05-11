import React, {useEffect, useCallback} from "react";
import {useDispatch} from "react-redux";
import {getFilteredUserListThunk, getUserListThunk} from "store/user-list/user-list.thunk";
import {useRootSelector} from "store/index.reducer";
import {UserList} from "./user-list/user-list";
import {setUserListSearchAction} from "store/user-list/user-list.action";
import {useDebounce} from "helpers/custom-hooks/use-debounce";
import './users.scss'
import {useHistory} from "react-router-dom";
import {ROUTE} from "constants/routes";
import {HeaderLayout} from "layouts/header/header";
import {Loader} from "shared/loader/loader";

export const Users: React.FC = () => {
    const h = useHistory()
    const d = useDispatch();
    const {userListState} = useRootSelector();
    const debouncedSearchTerm = useDebounce(userListState.search, 350);

    const goToUserProfile = useCallback((username: string) => {
        h.push(ROUTE.profile(username))
    }, [h]);

    useEffect(() => {
        if (userListState.data === null && !userListState.isLoading && !userListState.error) {
            d(getUserListThunk())
        }
    }, [d, userListState.data, userListState.isLoading, userListState.error]);

    useEffect(() => {
        if (debouncedSearchTerm.length) {
            d(getFilteredUserListThunk(debouncedSearchTerm))
        }
    }, [d, debouncedSearchTerm]);

    return (
        <HeaderLayout
            value={userListState.search}
            searchHandler={(value) => d(setUserListSearchAction(value))}
            searchText={'Enter username...'}
        >
            {
                !userListState.error ? (
                    userListState.data ? (
                        <div className='users'>
                            <UserList
                                data={userListState.search.length ? userListState.filteredData : userListState.data}
                                goToUserProfile={(username: string) => goToUserProfile(username)}
                            />
                        </div>
                    ) : <Loader/>
                ) : (
                    <div className='error'>
                        <p>{userListState.error}...</p>
                    </div>
                )
            }
        </HeaderLayout>
    )
}
