import { combineReducers } from 'redux';
import { useSelector } from 'react-redux';
import * as fromUserListReducer from './user-list/user-list.reducer';
import * as fromUserProfileReducer from './user-profile/user-profile.reducer';

export interface IRootState {
    userListState: fromUserListReducer.IUserListState;
    userProfileState: fromUserProfileReducer.IUserProfileState;
}

export const reducers = combineReducers<IRootState>({
    userListState: fromUserListReducer.userListReducer,
    userProfileState: fromUserProfileReducer.userProfileReducer,
});

export const useRootSelector = () => useSelector((state: IRootState) => state);
