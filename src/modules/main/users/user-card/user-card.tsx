import React from "react";
import './user-card.scss'

interface IProps {
    img: string;
    username: string;
    repos: number;
    goToUserPage: () => void;
}

export const UserCard: React.FC<IProps> = ({username, img, repos, goToUserPage}) => {
    return (
        <div className='user-card' onClick={goToUserPage}>
            <div className='flex-wrapper'>
                <img className='user-card-img' src={img} alt="avatar"/>
                <h3 className='user-card-name'>{username}</h3>
            </div>
            <p className='user-card-tag'>Repositories: {repos}</p>
        </div>
    )
}