import React from "react";
import {VOCABULARY} from "constants/user-profile.constants";
import './user-info.scss'

interface IProps {
    user: {
        img: string;
        username: string;
        email: string | null;
        location: string | null;
        joinDate: string;
        followers: number;
        following: number;
    }
}

export const UserInfo: React.FC<IProps> = ({user}) => {
    return (
        <div className='user-block'>
            <img className='user-block-img' src={user.img} alt="user avatar"/>
            <div className='user-block-info'>
                {
                    Object.entries(user).filter(([k]) => k !== 'img').map(([k, v]) => {
                        return (
                            <div className='user-block-info-item' key={k + v}>
                                <p>{VOCABULARY[k]} :</p>
                                <p>{v ?? VOCABULARY['empty']}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}