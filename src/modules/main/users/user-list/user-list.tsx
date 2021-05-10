import React from "react";
import {IUserListReformated} from "models/user-list.models";
import {UserCard} from "../user-card/user-card";
import './user-list.scss'

interface IProps {
    data: IUserListReformated[];
    goToUserProfile: (username: string) => void;
}

export const UserList: React.FC<IProps> = ({data, goToUserProfile}) => {
    return (
        <div className='user-list'>
            {data.map(user =>
                <UserCard
                    key={user.id}
                    img={user.avatar_url}
                    username={user.login}
                    repos={user.repos_count}
                    goToUserPage={() => goToUserProfile(user.login)}
                />
            )}
        </div>
    )
}